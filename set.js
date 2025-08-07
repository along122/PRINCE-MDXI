
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA71Va4+iSBT9L/VVM7wfmnQygIBgo+KjHdzsh0IKLHlalCJM/O8b7O6dSWZ2pjfZLJ+Korj3nHvPufUVFCWu0Qy1YPwVVARfIUX9krYVAmOgX+IYETAEEaQQjIE6G0VqMbnadhDCJdd5k9g0+d38NBcDJXcXXq6ss9F8Rm3xCdyHoLqEGT78ImDM2Psk9XwHt0V4PpvWcR/emmUYGOiMK1YadLMjTrrqujafwL2PCDHBRWJWR5QjArMZapcQk4/BX5hnmznvumDVOcdOu5kX3mjT3UUJN6ozl4964nOCW/o5p34MvlC/BLFa4bwsMkMQbttF6W5O+GJ160Tgg6kfLvfdSlXWgvYKv8ZJgSInQgXFtP1w3ZuZdFplOgoXqDMEuLme5tOMXe3DZHXNmgk0jxCuA/f4YnsfAz69nDTSHibxjEOT09YnC8cXnyneGofAo/s13Jz1czK5Fbz6PfAleddK+m/qnk/V4FIfn3f7aDmXp3WDSs2dMRrs+MJMI1dFiV926zRhP1j3GdHnBq46ubbYacoNSHxqxWL1ZVkOYGicUo58EewJm2xS8Rt8SC/kl+KOmkvhy7k3XRBsr2VkT5d4u6LnZ55YjHdmtoNwEh9yf9QYkIu7BT5zUXubM7kbm5RYG3ZjMWYxIrX7zLu5be+LFW6eHoxS1DoRGHP3ISAowTUlkOKy6PdGyhDA6LpGB4Loo7pAwmsZTaY7x9pXDA4ja2Ydy9ZrWSli9Kj1Ii7a3ziqe8vyCQxBRcoDqmsUTXFNS9J6qK5hgmow/uPRqJ4zQXlJkYsjMAYjTmFZSZYFSWY/15+aI6Q1rKpPBaJgCGJS5h4CY0ouaAgeP+iGofKGqEsThVVkS9MtnuMFVWBFjbV0U+kZ5q9JNzhHNYV5BcacIomSKHCifB/+NzgM3hyNLE62RENWJd0UJjqn8qzBCtzEUtjR/4VDEUYmy4umPBEUWdJ0luVkxeJUnbVM1dQnv8Gh3v8cggLd6KudehEI3BDEmNR0W1yqrITRu9feP8LDobwUdN0WB6NfIALG320jSnGR1D2zSwHJ4YivyOh5gHEMsxr9rTtEUPTO5W2WGmXU20HzVhar7gPQY+8D/VCbsfJjdbLHKV7gWVkWZFYVWZEXx8rnfn8ICtiHAnNt4Tl9Ud7g9tEjRCHO6r6rTt52a88vFyf/pgWBtta0mab1yn6n9+7eV3uY9ks4MSL95KiVriVpzhqlpq4C6SCzxUgzu5hiJlZynKU/CwLG4NwR6Qobt5jL/Etj68KeKZPn8CprWRwq3fOZ3+2q027POa0geqN460+2bDqwscWio5KE5YzdluW6kNoVfzpXyzjwj5r21GeL0BUf0PfJaslmtmbcFQHmQ293XaRW67sex7AO3W7Sl0HDVCuOC87Pg5k12F3zwdJOXeh6C71gOOmAO8ZBfjNKGbKle7YZref6SXudK4+5lr3dJ/jN8vjxGmP0GM9vPfhdI19x93Jj78PvQrzN+3+YmfpKz3ZNU/hBu5z5vuO6VDtrS3O3+LKgLuPrnqAEV2EgldUe3HvdVxmkcUlyMAawiEj50AkpL71+nSIuf5HM0BJH91+JZ7Cm2jdP/Mxm4uupJSmrKayP/XUdB40x6wXealW1ppC+Wwxo/WMbENz/AslkAO4UCQAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "917005663560", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
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
