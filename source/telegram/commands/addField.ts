import { Telegram } from '../client';
import { Message } from '../universal/types';

const replyMessage = 'Paste Google Maps link';

Telegram.on('message', (message: Message) => {
    console.log(message);
});

function addField() {
    Telegram.onText(/\/add_field/, (message: Message) => {
        const chatId = message.chat.id;
        Telegram.sendMessage(chatId, replyMessage, { reply_markup: { force_reply: true } });
    });
    Telegram.on('message', (message: Message) => {
        console.log(message);
    });
}

export { addField };
