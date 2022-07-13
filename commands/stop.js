module.exports = ({

 name: "stop",

 code: `

 $stop

 $title[1;Stopped Succesfully]

 $description[1;Music has been succesfully stopped!]
 $color[1;RANDOM]

 $onlyIf[$queueLength!=0;No song is playing now!]

 $onlyIf[$voiceID!=;You aren't connected to a voice channel!]

 `

 })