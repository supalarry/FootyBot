import { Telegram } from '../client';

function addField() {
    Telegram.onText(/\/add_field/, (msg: any, match: any) => {
        const chatId = msg.chat.id;
        Telegram.sendMessage(chatId, 'Field added');
    });
}

export { addField };
