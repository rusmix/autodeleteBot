import 'reflect-metadata'
// Setup @/ aliases for modules
import 'module-alias/register'
// Config dotenv
import * as dotenv from 'dotenv'
dotenv.config({ path: `${__dirname}/../.env` })
// Dependencies
import { Context } from 'grammy'

import { Message } from '@grammyjs/types'
import { run } from '@grammyjs/runner'
import bot from '@/helpers/bot'

type MyMessage = Message & { is_automatic_forward?: boolean }

async function runApp() {
  console.log('Starting app...')
  bot.on('message', async (ctx: Context) => {
    if (ctx?.update && ctx.update?.message)
      if ((ctx.update.message as MyMessage).is_automatic_forward) {
        await ctx.deleteMessage()
        console.log('deleted successfully', ctx.update.message)
      }
  })
  // Errors
  bot.catch(console.error)
  // Start bot
  await bot.init()
  run(bot)

  console.info(`Bot ${bot.botInfo.username} is up and running`)
}

void runApp()
