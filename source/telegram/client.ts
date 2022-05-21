import { Telegraf } from 'telegraf';

const token = process.env.TELEGRAM_KEY;

if (!token) {
    throw new Error('Missing TELEGRAM_KEY environment variable');
    process.exit(1);
}

const TelegramBot = new Telegraf(token);

export { TelegramBot };
