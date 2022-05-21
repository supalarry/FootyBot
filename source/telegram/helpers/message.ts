import { Message } from '../universal/types';
import { CHAT_TYPE } from '../universal/constants';

function isPrivateMessage(message: Message) {
    if (message.chat.type === CHAT_TYPE.PRIVATE_CHAT) {
        return true;
    }
    return false;
}

function isGroupMessage(message: Message) {
    if (message.chat.type === CHAT_TYPE.GROUP_CHAT) {
        return true;
    }
    return false;
}

export { isPrivateMessage, isGroupMessage };
