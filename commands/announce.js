module.exports = [{
  name: 'announce',
  aliases: ['announcement','ann','pengumuman'],
  code: `
  $channelSendMessage[$mentionedChannels[1;yes];{newEmbed:{title:$splitText[1]}{description:$splitText[2]}{color:$getVar[gcolor]}{footer:From#COLON# $userTag[$authorID]:$authorAvatar}{deletecommand}}]
  $onlyIf[$splitText[2]!=;{"content": "**Usage**: av?announce \`<channel(opsional)> <title | description>\`", "reply": {"messageReference": "$messageID"}, "allowedMentions": { "repliedUser": false }}]
  $onlyIf[$splitText[1]!=;{"content": "**Usage**: av?announce \`<channel(opsional)> <title | description>\`", "reply": {"messageReference": "$messageID"}, "allowedMentions": { "repliedUser": false }}]
  $textSplit[$message;|]
  $onlyPerms[admin;{"content": "Kamu tidak memiliki permission untuk menggunakan command ini!", "reply": {"messageReference": "$messageID"}, "allowedMentions": { "repliedUser": false }}]
`
}]