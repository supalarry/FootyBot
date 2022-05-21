import { TelegramBot } from '../client';

function addField() {
    TelegramBot.command('add_field', (ctx) => {
        ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);
    });
}

export { addField };
