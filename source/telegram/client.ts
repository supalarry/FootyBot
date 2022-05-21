const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_KEY;

const Telegram = new TelegramBot(token, { polling: true });

export { Telegram };
