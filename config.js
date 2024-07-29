//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "derryjay1711@gmail.com";
global.location = "Enugu, Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "2349019406102";
global.owner = process.env.OWNER_NUMBER || "2349019406102";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUZTSVIyN2lDTXBkbzVKR3pRNWxBY2NPZjE2WTBINjBBWUtQcnJMMklHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnN4NDVGQ1d0K0Y3RmFwQXpsaVRlY3RTSkpTRmxBZVpyTVRCSGduSnB4WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSFV5OTFCMmxUOThZZTlOS2VzV29JM1o4a2R4dUpBN0xSd0hnaEZYckdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJweU0zeHg0Tk9WU0hMVUNXc0djaWgxeFNEOGM1M2djRTlvS2gvVkw1WVEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllKZnlhaXpTQVZxU3I4NVVHYzdOVmx0MDJhYjl2M21hV1FKUGVianIvMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFqRDF4cGtncGpoWFVxNG9rVXZjdFNNVVc0MElEL2FoUEdaQ1Zhbk9QRjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJtaENtSEFLR1RNZ05GcEFrWWU0WFhvaHRSa1VDMnlabm1FQW5zNGVVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTZyWVg4MTB4WlRYK2hneTkrTHVhazFFRS9Fdlh1R293ODJoclpvaW9Sdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlkyVG56OFpnRUdkNzBpTnpwY21IenNLdHRCTVoyNGtmbkFUR1JIckRqMXpHLzBpQ1dpUmZZSDdVc1lrK3JkZVlEN0loZmNGeGV4VGFRNmtidzRxN2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY0LCJhZHZTZWNyZXRLZXkiOiI5S2dzaTZkTEZ2NTAwWnNTbU5sRnBnWjc4alVtanJZUWpZcGMxUFR1UXZvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjdmlNajMwcFIwV3g5LV85REN4aGF3IiwicGhvbmVJZCI6ImU1YmY1N2Q5LTZhOGYtNDFkZC1hMDRlLTdhNzJmMjBjNGM2NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMOTVhVER5OG5mbVRVU0xQRzNtbFcvTjl6ZG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlNtZk9HcHZEQWlpV3BXcEhHOGJ6VHdaaVZZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkwzN1gzMVg1IiwibWUiOnsiaWQiOiIyMzQ3MDcwMjM5MDA0OjExQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQangvL0FDRUtXTG43VUdHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOZ0laNGxiWUVDbW15YmJsdlUybDY4ZUFzMFR4WWFSeFJiYkJuVG5mRVV3PSIsImFjY291bnRTaWduYXR1cmUiOiJRM0JuTkhJd0xkalVkcmZRaVprOU5UWndRQmh3UkFMZWwydHVCRHlzRGE5T3p4K2kxRjlrNGcyUUVlN1MraHNTYk1oanp4dXRTSHROc2dYWTJiMW9EQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWmY0SnJyc00wUmNBcEdDMHJjR0REYlMyUlNmT2FOWXBYeEhXdjFsTHdKejFIYnkzY24wQldHSTVHYkc1cThpWEVoVmxpMnBKdnhHUWMrNzBHZlRKZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDcwMjM5MDA0OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRZQ0dlSlcyQkFwcHNtMjViMU5wZXZIZ0xORThXR2tjVVcyd1owNTN4Rk0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIyNzExNTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0Z2In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Nigeria by Jay| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "Jay",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "DEÆTHSTROKE-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "JAY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
