import { Telegram } from '../client';

function addField() {
    Telegram.onText(/\/add_field (.+)/, (msg: any, match: any) => {
        const chatId = msg.chat.id;
        const resp = match[1];
        Telegram.sendMessage(chatId, resp);
    });
}

export { addField };
