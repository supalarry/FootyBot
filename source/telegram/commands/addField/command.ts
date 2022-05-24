import { Scenes, Telegraf } from 'telegraf';
import { sceneId } from './scene';
import { NAMESPACE } from './constants';
import Logger from '../../../services/logger';

const command = 'add_football_field';

function addFieldCommand(bot: Telegraf<Scenes.WizardContext>) {
    bot.command(command, (ctx) => {
        Logger.info(NAMESPACE, 'command invoked');
        ctx.scene.enter(sceneId);
    });
}

export { addFieldCommand };
