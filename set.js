
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61V2Y7iOBT9F7+CurIQ4iCVNCELSwIV9mU0DyZ2gglZiE0WWvz7KFA13VL3dNdIkyfHy/U5955z/RUkKWXEITXofQVZTgvESTPkdUZAD/SvQUBy0AYYcQR6wNG9oRw40svSvLnpjsqHY3y9jHfHOAiHyznW7KVr2nserdgruLdBdj2cqf+LgGWRJTfLHtszj/vwNFHXooumGckX+9hSzNyaSmYXc3FSdl7BvYmIaE6T0MqOJCY5Ojuk9hDNPwd/MbAtT9J8pzM5irwK7VO0OdwcfHUWG5gx/XIRBN/bhHsx/Bz8VbQq0DYvYrzv16xVFVeoT5cYRsfopXXFaT93F3sHTtU+e8JnNEwIHmGScMrrT+edDZZndxTAN3eLeD0PDa3FTlOtWnJPcMl4RPFkoL/tcLy1Pgdc2Rz1voc0d9SajMV50B0VW281qKZv+7fxpBsmb5BL01ZnYk6+B+7lH1qJ/kveDd0uwxkSpMzU8x2ba2xo4I4zi3z7VNh46iIqjKVEFWP/c/CDsODD8+BwzTdla9O3nQvcCVmo72qqmjcS3gyBnqdTiBf+N/iIX/NfobzMp2yNWyjxz9K5i1aLvV4qE7rQUdyVzYEXe0shqqzVzjDruFNEl5u0qscvbCMPp8NMEXej+kUPj0Vr7B+vEzpeH5FIZ68PRhGpRxj0xHsb5CSkjOeI0zRp5iRRagOEiwXxc8If6QXJJdp7ZO5pqz5W0NK01vNrZu3L1ZijE9rGzp6ebGYsyhfrFbRBlqc+YYzgIWU8zesJYQyFhIHen49KNaRzEqecjCkGPaCJmiTLClRgV/uDfSmPiDOUZV8SwkEbBHkaTwjo8fxK2uBxoK90+l2xD6HeFw1NMCzYNWTF7mhQ7ELYERuK8fPSJY0J4yjOQE9UFVnVoCaL9/b/g0O1rY5p6IosW4qh2JqpiIIObU1SoCbItv4bHNL/hUPSVFHqy6ai2aopd0yoGKop64oqQ70vW8JvcCj3v9ogIRV/+qlRgSy2QUBzxlfJNTunCH+Y7WMR+X56TfiiTnyjGZAc9L6bJpzTJGQNs2uCcv9IC2I0PEAvQGdG/hEeyQn+4PLeTI0UN37YTLarjWgpoMHeBPohNz2o/pie8zMjggI7iqKImqiJz53NQhskqAkG5mnVJOUdbhMdE47omTXtwblUF60zsEZxncLZYKBboW6EOvhG78O+T3ugYksd0/Kzt1lgLeY1dcWR2E8DbXwog/26KtHSVY01PUrl60+CgB4Y1DaElXrIXCXm9vbQl7bm4Si2FAgP41k5d7C+MasDa6WU2dEpuShUha5gn06TwaD2nEUmVHgQQY41OtyVh+i2dUz9tbkNk4L65PvL3Logttm9QmKNPRy9zDeuOxolySw5RHPhgrasmuLoKF26mkpR5nRgXZ21m+Er1VqhpNLH5bawsWoILl7cDiks6gktn43l0djO7w8Kfbc8ffwGlDz683sFflvIJ/BGb8K9/V2M947/L12zv8nFDg2robOMhpUV+SnVFtMZGr4sNnAorX1/ENWt8rxLMQP3RvjZGfEgzeOmkAnO04dM8vTaCHiUBOkvHxJhpIdP5mfEuP7NFD/xmQSfu7w8zYaIHUEPyMGuNJxG4bWeZQuO+IfHgN58HgvB/W87F6uZFgkAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
