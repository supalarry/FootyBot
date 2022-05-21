import { addField } from './commands/addField';
import { Telegram } from './client';

function enableCommands() {
    addField();
}

function launchTelegramBot() {
    enableCommands();
    Telegram.launch();
}

export { launchTelegramBot };
