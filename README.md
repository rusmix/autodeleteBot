# Global dependencies

nodejs, npm, yarn, pm2

# Installation and local launch

1. Clone this repo
2. Create `.env` with the environment variables listed below
3. Run `yarn` in the root folder

- Download pm2: sudo npm install pm2 -g
- start: pm2 start "yarn distribute" --name "autodelete-bot"
- restart: pm2 restart (process_id) --update-env

# Environment variables

- `TOKEN` — Telegram bot token

# License

MIT — use for any purpose. Would be great if you could leave a note about the original developers. Thanks!
