const aoijs = require('aoi.js');
const bot = new aoijs.Bot({
 token: process.env.TOKEN,
 prefix: ".",
 intents: 'all',
 mobile: true
})

//Bot callback's
bot.onMessage();
bot.onInteractionCreate();

//Bot ready
bot.readyCommand({
 channel: "",
 code: `$log[$userTag[$clientID] Ready!]`
})

//Command handler
const loader = new aoijs.LoadCommands(bot);loader.load(bot.cmd,'./commands/')

// Music System
const voice = new aoijs.Voice(bot, {
  soundcloud: {
    clientId: "iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX",
  },
  cache: {
    cacheType: "Memory",
    enabled: true,
  }
}); 

//Mentioned Response
bot.command({
  name: '$alwaysExecute',
  code: `
  $reply[$messageID;no]
  My prefix is#COLON# \`.\`
  $cooldown[5s;]
  $onlyIf[$checkContains[$message;<@$clientID>;<@!$clientID>]==true]
`
})

//Bot status
bot.status({
 type: 'PLAYING',
 text: 'Shoft Roleplay',
 time: 12
})

//Bot variables
bot.variables({
  prefix: ".",
  gcolor: "RANDOM",
})