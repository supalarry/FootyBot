# FootyBot

FootyBot helps organizing football matches ⚽. It is a Telegram Bot and can be added to any group.

```
                     ___
 o__        o__     |   |\
/|          /\      |   |X\
/ > o        <\     |   |XX\
```

## Local development environment

Finish next sections in the order listed.

### Environment requirements

1. This project requires Node 16 or higher to be installed on your machine.
2. This project uses the `pnpm` dependency manager with all the dependencies being pinned. Run `corepack enable` and then `corepack prepare pnpm@<version> --activate` where `<version>` has to be
   replaced by the version listed in package.json packageManager key.

### Docker

1. Install Docker
2. Start the Docker app

### Secrets

1. Install Doppler CLI: https://docs.doppler.com/docs/install-cli

2. Log into Doppler `doppler login`

3. Set up secrets. Press 'Yes' to `Use settings from repo config file (doppler.yaml)?` `doppler setup`

### Database

We are using supabase which runs Postgres. Next, we use Prisma to interact with supabase.

1. Install supabase `brew install supabase/tap/supabase`
2. When running `npx prisma` in the future prepend `doppler run --` before it:

```
doppler run -- npx prisma migrate dev --init
```

### Starting development environment

1. Run `pnpm install` to install dependencies.
2. Run `pnpm dev` to start the development server and database.
3. Access dev server on `localhost:3001`

### Accessing Database via a GUI

1. Install TablePlus. It allows to view database visually.
2. Use following credentials to connect

```
host: 127.0.0.1
port: 54322
user: postgres
password: postgres
database: postgres
```

## Telegram bot

Within `dev` and `prod` doppler configs we have a `TELEGRAM_KEY` token. It points to a specific Telegram bot and is used to set up a client via which we interact with Telegram.

### Local development

Name: `FootyTestBot`; Username: `football_with_footy_test_bot`; Link: `t.me/football_with_footy_test_bot`;

### Production environment

Name: `FootyBot`; Username: `football_with_footy_bot`; Link: `t.me/football_with_footy_bot`;

## Telegram bot commands

The commands have to be submitted to the BotFather (Telegram's bot managing bots) using the following format: `command - description`.

Here is the list of our commands:

```
add_field - Add a new football field
```

If you want to add a new command:

1. Copy list above and add the new command below it.
2. Submit the commands to the test bot `football_with_footy_test_bot`
3. Test the latest added command
4. Add the list above + the newest command to production bot `football_with_footy_bot`

The implementation of commands reside in `source/telegram/commands`.

### addField: Add a new football field

command: `/add_field`

description: add a new football field

Response: `{ "message": "pong" }`

## Tech stack

1. Node.js + Express + TypeScript
2. Server hosted on Render
3. Postgres database hosted in Supabase
4. Secrets managed by Doppler
