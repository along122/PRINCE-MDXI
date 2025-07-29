
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61V266iSBT9l3rVtCB3k5MMNwW8i4o6mYcSCizlZhUXseO/T/B4pjvpnu4zyfBUVBV7r7X3WpuvIM0wRWPUgMFXkBNcwQK1y6LJERgArQxDREAXBLCAYAD8+Ubn14s4njLWqJkpniM3chXBe4KsBO47u8ssnJ8578b4b+DRBXl5jLH/i4AOF0ZeJ6vjWr6txAUfWMlweE4m8yhuEtMTLbP2GN9B7PnyBh5tRIgJTiMzP6EEERiPUbOAmHwOPj+SrtuetKOqNlUnE0YLRaVg84vsa8ExYI7XSNRcDs8OXP05+Bg2gj9L7ke5Ovt79uz4h4nrVbXrX8qcndXXXUWuk5ll3vfv8CmOUhTYAUoLXDSfrvtydJCT2va3XH+LRGqc95PzRLOOmivU5gbLWrn1YIeX19vp54BfOMef2vjsrmWX7MI0v66gaxebXjPBSOHu+TIIDtUpGV3k74EvyIdWLv+l7p15WXqj/kpUm7pJsz4e7eLhniuvrn6nac9ckyWvdfzeNN5/Dr6lpk7fsvJbx2bcm1I4joNv0LujwFpTc1JVZcBYugFJvfwGHxYl+RXK/l5wZPcshIf5gmFlZed56uwQ6KvFLfCroaude2lYmk7nNNc7hB9mYb/ayStBOx8dlWvmO2EjOWI6glmwitYWrITsfFq+PRldUGMHYMA+uoCgCNOCwAJnabvHC10Ag8pFPkHFs7oAGlMsmGspudqdqjeWo9Q6KpzajJ2NOMnF4XZzK8xyOF4uojfQBTnJfEQpCixMi4w0U0QpjBAFgz+fjWo5E5RkBXJwAAZAYZU+xwmyIIvKH/RLfYIFhXn+JUUF6IKQZMkUgUFBStQFzw8kRhKH6lA2FLPPMZI21IyhaMi8bIosy+hsyzB5T7rGCaIFTHIwYCWBk1mBkZhH9//BwYm8borGUFX7wtBkDE0zWcPgOEZjDIHpS7/Bwf5fOFRO1Die4SSD1w1TYQ2NVTSWkQxNNExJ+x0O/vFXF6ToVrzbqRUBx3ZBiAktNmmZxxkMPrz2cQh9PyvTwm1SX28XiIDBd9uoKHAa0ZZZmULin3CF9JYHGIQwpugf3SGCgg8ur1mqZ0FrB0FZadxCtkCLvQ30Q20GsvxjeeLntT4jyLwgCKzCKuz7zfagC1LYBgOr7NYW5QW3jR6gAuKYggHQx+XtqvAj03HrfLocjVQzUvVIBd/ofbj3ZY9qh8eG6efzZWi6qwZPWJvVslBxjnV42N5quJ5I+haf+vXbT4I8rb7RzCrVPetOrSu3rWalZQfHw5nf7HaqvcW3ccc2HZp61EgE4ygYKPVqwh2Jv6x3HWac5Lt8Z3TS9e5KKsyKLGnU1updEKAK++j7ZItejgJlnFJ2yWUddVRSyZ03m/txnA41jSY6nUrj2daa++Ve7dsJ6lDeHZVTjl8oozpp5uI+SUZjz4it2B6abGanWhS9z5XnXItf/xP8sjx+voYYPcfzqwO/beQ78FZvzKP7XYzXwP+Xoal5hOVxdLPG64t1My9+hhV3toRWz/Vkq7/1/dGl6dTxPgsoeLTCz2NYhBlJ2kamAcmeMiFZ2QrYTsPsF8l0lbHVF/MY0kL9Zoqf+EyU3m8tSJZbkJ7aARLua33cKrxR89wtYPHhMaC2z4Ji8PgbWdZa9hUJAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "919233585869", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
