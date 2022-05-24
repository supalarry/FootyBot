import { Scenes, Telegraf } from 'telegraf';
import Logger from '../../../services/logger';
import { NAMESPACE } from './constants';

const command = 'healthCheck';

// This is not a user facing command. This command is used to check
// if our server is running.
function healthCheck(bot: Telegraf<Scenes.WizardContext>) {
    bot.command(command, (ctx) => {
        Logger.info(NAMESPACE, 'bot health was checked');
        ctx.reply('Bot is alive');
    });
}

export { healthCheck };
