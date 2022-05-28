/* eslint-disable @typescript-eslint/no-floating-promises */
import { Composer, Scenes } from 'telegraf';
import * as Typegram from 'telegraf/src/core/types/typegram';
import { NAMESPACE } from './constants';
import Logger from '../../../services/logger';
import { prisma } from '../../prisma/client';

export const sceneId = 'startScene';

const stepHandler = new Composer<Scenes.WizardContext>();

const startScene = new Scenes.WizardScene(
    sceneId,
    async (ctx) => {
        Logger.info(NAMESPACE, 'scene entered');

        const message = ctx.message as Typegram.Message.TextMessage;
        const user = await createNewUser(message);

        await ctx.reply(`Welcome ${user.username}. I am happy to meet you.`);
        await ctx.reply('FootyBot helps you organize football matches. Simply type one of these commands and enjoy:');
        await ctx.reply('/add_football_field : Add a new football field so everyone can join there.');
        return await ctx.scene.leave();
    },
    stepHandler
);

async function createNewUser(message: Typegram.Message.TextMessage) {
    const from = message?.from;

    if (!from || !from.id || !from.first_name || !from.username || !from.language_code) {
        throw new Error('Missing user information');
    }

    let user;

    user = await prisma.user.findUnique({
        where: {
            telegram_id: from.id
        }
    });

    if (!user) {
        user = await prisma.user.create({
            data: {
                telegram_id: from.id,
                first_name: from.first_name,
                username: from.username,
                language_code: from.language_code
            }
        });
    }

    return user;
}

export { startScene };
