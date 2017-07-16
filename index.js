const { client } = require('tmi.js')

const options = {
  options: {
    debug: true
  },
  connection: {
    cluster: 'aws',
    reconnect: true
  },
  identity: {
    username: 'chat_droid',
    password: `oauth:${process.env.TWITCH_OAUTH_TOKEN}`
  },
  channels: ['obi_jan_kenobi']
}

const bot = new client(options)

bot.connect()

bot.on('chat', (channel, _, message, self) => {
  if (self) return
  if (message === '!github') bot.say(channel, 'https://github.com/obi-jan-kenobi')
})
