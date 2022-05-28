/* eslint-disable @typescript-eslint/no-floating-promises */
import { Composer, Scenes } from 'telegraf';
import * as Typegram from 'telegraf/src/core/types/typegram';
import { isStop, isUrl } from '../../helpers/message';
import { displayStopMessage } from '../../helpers/reply';
import { NAMESPACE } from './constants';
import Logger from '../../../services/logger';

export const sceneId = 'addFieldScene';

const stepHandler = new Composer<Scenes.WizardContext>();

const addFieldScene = new Scenes.WizardScene(
    sceneId,
    async (ctx) => {
        Logger.info(NAMESPACE, 'scene entered');
        await ctx.reply('📍Please, share with me the Google Maps link. Follow the instructions:', { reply_markup: { force_reply: true } });
        await ctx.replyWithAnimation('https://media3.giphy.com/media/gIHxpiP5OE8zYyzhF5/giphy.gif?cid=790b7611c36a00f141a60ceeee95c4f9ee87e1f0867f0760&rid=giphy.gif&ct=g');
        return ctx.wizard.next();
    },
    async (ctx) => {
        const message = ctx.message as Typegram.Message.TextMessage;
        if (isStop(message)) {
            Logger.info(NAMESPACE, 'scene left');
            displayStopMessage(ctx);
            return await ctx.scene.leave();
        }
        if (isUrl(message)) {
            await ctx.reply('🥳 Amazing! Now, anyone can organize a match there!');
            await ctx.reply('👀 View available fields using /list_football_fields command.');
            await ctx.reply('📅 Organize a game using /organize_game command.');
            Logger.info(NAMESPACE, 'scene left');
            return await ctx.scene.leave();
        } else {
            await ctx.reply('❌ I only accept links. Link looks like this: https://goo.gl/maps/qxrjjGkoKsJmhd4v9', { reply_markup: { force_reply: true } });
            return ctx.scene.reenter();
        }
    },
    stepHandler
);

export { addFieldScene };
