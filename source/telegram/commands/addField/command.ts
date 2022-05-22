import { Scenes, Telegraf } from 'telegraf';
import { sceneId } from './scene';

const command = 'add_football_field';

function addFieldCommand(bot: Telegraf<Scenes.WizardContext>) {
    bot.command(command, (ctx) => {
        ctx.scene.enter(sceneId);
    });
}

export { addFieldCommand };
