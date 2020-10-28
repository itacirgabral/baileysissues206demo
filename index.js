const fs = require('fs')
const { WAConnection, MessageType, Mimetype } = require('@adiwajshing/baileys')

const someone = '554433221100@s.whatsapp.net'
const audio = fs.readFileSync(require('path').join(__dirname, 'audio.ogg'))
const options = {
  mimetype: Mimetype.ogg
}

;(async () => {
    const conn = new WAConnection() 

    await conn.connect()

    setTimeout(() => {
        console.log('bep')
        conn.sendMessage (someone, audio, MessageType.audio, options)
    }, 5012)
})()