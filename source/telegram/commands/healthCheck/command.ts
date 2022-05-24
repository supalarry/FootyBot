import { Scenes, Telegraf } from 'telegraf';

const command = 'healthCheck';

// This is not a user facing command. This command is used to check
// if our server is running.
function healthCheck(bot: Telegraf<Scenes.WizardContext>) {
    bot.command(command, (ctx) => {
        ctx.reply('Bot is alive');
    });
}

export { healthCheck };
