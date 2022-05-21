import { addField } from './commands/addField';
import { Telegram } from './client';

function launchCommands() {
    addField();
}

function interactWithTelegram() {
    launchCommands();
    Telegram.launch();
}

export { interactWithTelegram };
