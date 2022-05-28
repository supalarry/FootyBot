/* eslint-disable @typescript-eslint/no-floating-promises */
import { Composer, Scenes } from 'telegraf';
import * as Typegram from 'telegraf/src/core/types/typegram';
import { isStop, isUrl } from '../../helpers/message';
import { displayStopMessage } from '../../helpers/reply';
import { NAMESPACE } from './constants';
import Logger from '../../../services/logger';

export const sceneId = 'startScene';

const stepHandler = new Composer<Scenes.WizardContext>();

const startScene = new Scenes.WizardScene(
    sceneId,
    async (ctx) => {
        Logger.info(NAMESPACE, 'scene entered');
        Logger.debugNestedObject(NAMESPACE, 'message', ctx.message);
        await ctx.reply('welcome welcome');
        return await ctx.scene.leave();
    },
    stepHandler
);

export { startScene };
