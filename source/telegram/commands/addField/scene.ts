/* eslint-disable @typescript-eslint/no-floating-promises */
import { Composer, Scenes } from 'telegraf';
import * as Typegram from 'telegraf/src/core/types/typegram';
import { isStop, isUrl } from '../../helpers/message';
import { displayStopMessage } from '../../helpers/reply';
import { NAMESPACE } from './constants';
import Logger from '../../../services/logger';
import { prisma } from '../../prisma/client';

export const sceneId = 'addFieldScene';

const stepHandler = new Composer<Scenes.WizardContext>();

const addFieldScene = new Scenes.WizardScene(
    sceneId,
    async (ctx) => {
        Logger.info(NAMESPACE, 'scene entered');

        // @ts-ignore
        ctx.session.field = {};

        await ctx.reply('What is the name of the football field?', { reply_markup: { force_reply: true } });
        return ctx.wizard.next();
    },
    async (ctx) => {
        Logger.info(NAMESPACE, 'scene entered');

        const message = ctx.message as Typegram.Message.TextMessage;

        // @ts-ignore
        ctx.session.field.name = message.text;

        await ctx.reply('What is the Google Maps link of the football field?', { reply_markup: { force_reply: true } });
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
            // @ts-ignore
            ctx.session.field.link = message.text;

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

async function createNewField({ name: string, link: string }) {
    // user = await prisma.footballField.findUnique({
    //     where: {
    //         telegram_id: from.id
    //     }
    // });
    // if (!user) {
    //     user = await prisma.user.create({
    //         data: {
    //             telegram_id: from.id,
    //             first_name: from.first_name,
    //             username: from.username,
    //             language_code: from.language_code
    //         }
    //     });
    // }
    // return user;
}

export { addFieldScene };
