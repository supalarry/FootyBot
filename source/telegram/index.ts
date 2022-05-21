import { addField } from './commands/addField';
import { TelegramBot } from './client';

function enableCommands() {
    addField();
}

function launchTelegramBot() {
    enableCommands();
    TelegramBot.launch();
}

export { launchTelegramBot };
