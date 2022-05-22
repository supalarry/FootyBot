import { Scenes, session, Telegraf } from 'telegraf';
// all controllers
import { addFieldScene } from './commands/addField/scene';
// all routes
import { addFieldCommand } from './commands/addField/command';

function startTelegramBot() {
    stopCurrentBotInstance();
    const bot = createBot();
    addSession(bot);
    addScenes(bot);
    addCommands(bot);
    launchBot(bot);
    enableGracefulStop(bot);
}

function stopCurrentBotInstance() {
    (Telegraf as any).webhookServer?.close();
    (Telegraf as any).polling?.stop();
}

function createBot() {
    const token = process.env.TELEGRAM_KEY;

    if (!token) {
        throw new Error('Missing TELEGRAM_KEY environment variable');
    }

    const bot = new Telegraf<Scenes.WizardContext>(token);
    return bot;
}

function addSession(bot: Telegraf<Scenes.WizardContext>) {
    bot.use(session());
}

function addScenes(bot: Telegraf<Scenes.WizardContext>) {
    const scenes = loadScenes();
    const stage = new Scenes.Stage<Scenes.WizardContext>(scenes);
    bot.use(stage.middleware());
}

function loadScenes() {
    return [addFieldScene];
}

function addCommands(bot: Telegraf<Scenes.WizardContext>) {
    const commands = loadCommands();
    commands.forEach((command) => {
        command(bot);
    });
}

function loadCommands() {
    return [addFieldCommand];
}

function launchBot(bot: Telegraf<Scenes.WizardContext>) {
    bot.launch();
}

function enableGracefulStop(bot: Telegraf<Scenes.WizardContext>) {
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
}

export { startTelegramBot };
