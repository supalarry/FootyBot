import { Scenes } from 'telegraf';

function displayStopMessage(ctx: Scenes.WizardContext<Scenes.WizardSessionData>) {
    ctx.reply('🚪 🏃 Bye');
}

export { displayStopMessage };
