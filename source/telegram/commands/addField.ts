import { Telegram } from '../client';

function addField() {
    Telegram.command('add_field', (ctx) => {
        ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);
    });
}

export { addField };
