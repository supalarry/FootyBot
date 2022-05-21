import { CHAT_TYPE } from './constants';

interface User {
    id: number;
    is_bot: boolean;
    first_name: string;
    username: string;
    language_code: string;
}

interface PrivateChat {
    id: number;
    first_name: string;
    username: string;
    type: CHAT_TYPE.PRIVATE_CHAT;
}

interface GroupChat {
    id: number;
    title: string;
    type: CHAT_TYPE.GROUP_CHAT;
}

export interface Message {
    message_id: number;
    text: string;
    from: User;
    chat: PrivateChat | GroupChat;
    date: number;
    reply_to_message?: Message;
}
