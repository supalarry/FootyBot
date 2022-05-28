import { Scenes, session, Telegraf } from 'telegraf';
import { isDevelopment } from '../helpers/environment';
import { config } from './config';
import Logger from '../services/logger';
const ngrok = require('ngrok');
// all scenes. add them to array returned by loadScenes()
import { addFieldScene } from './commands/addField/scene';
import { startScene } from './commands/start/scene';
// all commands. add them to array returned by loadCommands()
import { addFieldCommand } from './commands/addField/command';
import { startCommand } from './commands/start/command';
import { healthCheck } from './commands/healthCheck/command';

const NAMESPACE = 'telegram/bot.ts';

(async function () {
    await startTelegramBot();
})();

async function startTelegramBot() {
    const bot = createBot();
    addSession(bot);
    addScenes(bot);
    addCommands(bot);
    await launchBot(bot);
    enableGracefulStop(bot);
}

function createBot() {
    Logger.info(NAMESPACE, 'Start creating bot...');
    const token = process.env.TELEGRAM_KEY;

    if (!token) {
        throw new Error('Missing TELEGRAM_KEY environment variable');
    }

    const bot = new Telegraf<Scenes.WizardContext>(token);
    Logger.info(NAMESPACE, 'Finished creating bot.');
    return bot;
}

function addSession(bot: Telegraf<Scenes.WizardContext>) {
    Logger.info(NAMESPACE, 'Start adding bot session...');
    bot.use(session());
    Logger.info(NAMESPACE, 'Finished adding bot session.');
}

function addScenes(bot: Telegraf<Scenes.WizardContext>) {
    Logger.info(NAMESPACE, 'Start adding bot scenes...');
    const scenes = loadScenes();
    const stage = new Scenes.Stage<Scenes.WizardContext>(scenes);
    bot.use(stage.middleware());
    Logger.info(NAMESPACE, 'Finished adding bot scenes.');
}

function loadScenes() {
    return [addFieldScene, startScene];
}

function addCommands(bot: Telegraf<Scenes.WizardContext>) {
    Logger.info(NAMESPACE, 'Start adding commands scenes...');
    const commands = loadCommands();
    commands.forEach((command) => {
        command(bot);
    });
    Logger.info(NAMESPACE, 'Finished adding commands scenes.');
}

function loadCommands() {
    return [addFieldCommand, startCommand, healthCheck];
}

async function launchBot(bot: Telegraf<Scenes.WizardContext>) {
    Logger.info(NAMESPACE, 'Start launching bot...');
    const domain = await getBotDomain();
    const port = config.port;

    bot.launch({
        webhook: {
            domain,
            port
        }
    });

    Logger.info(NAMESPACE, 'Launched bot. Launch information:');
    Logger.info(NAMESPACE, `Launch environment: ${config.environment}`);
    Logger.info(NAMESPACE, `Launch domain: ${domain}`);
    Logger.info(NAMESPACE, `Launch port: ${port}`);
}

async function getBotDomain() {
    if (isDevelopment()) {
        const token = process.env.NGROK_KEY;
        return await ngrok.connect({ addr: config.port, token });
    }
    return process.env.RENDER_EXTERNAL_URL;
}

function enableGracefulStop(bot: Telegraf<Scenes.WizardContext>) {
    process.once('SIGINT', () => {
        Logger.info(NAMESPACE, 'Start terminating bot on SIGINT...');
        bot.stop('SIGINT');
        Logger.info(NAMESPACE, 'Finished terminating bot on SIGINT.');
    });
    process.once('SIGTERM', () => {
        Logger.info(NAMESPACE, 'Start terminating bot on SIGTERM...');
        bot.stop('SIGTERM');
        Logger.info(NAMESPACE, 'Finished terminating bot on SIGTERM.');
    });
}
