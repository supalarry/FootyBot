import { Context as Telegraf } from 'telegraf';
import { CHAT_TYPE } from '../universal/constants';

function isPrivateMessage(message: Telegraf['message']) {
    if (!message) {
        return false;
    }

    if (message.chat.type === CHAT_TYPE.PRIVATE) {
        return true;
    }
    return false;
}

function isGroupMessage(message: Telegraf['message']) {
    if (!message) {
        return false;
    }

    if (message.chat.type === CHAT_TYPE.GROUP) {
        return true;
    }
    return false;
}

export { isPrivateMessage, isGroupMessage };
