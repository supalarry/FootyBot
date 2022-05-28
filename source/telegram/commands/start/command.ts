import { Scenes, Telegraf } from 'telegraf';
import { sceneId } from './scene';
import { NAMESPACE } from './constants';
import Logger from '../../../services/logger';

const command = 'start';

function startCommand(bot: Telegraf<Scenes.WizardContext>) {
    bot.command(command, (ctx) => {
        Logger.info(NAMESPACE, 'command invoked');
        ctx.scene.enter(sceneId);
    });
}

export { startCommand };
