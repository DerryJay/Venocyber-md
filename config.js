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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VIZE0wcDJ6MnI1M2RjZm9wSEd5a1JHYlQ5Q0UzeHpsdnptU0xJb2dHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmRONUxIZ1lDU3VCaXRCQ2MrK3dPS3lyTEYxMk55dHc2VW4ySWgzMVZBdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRElIUWNXK1QyK2c1cVBabGUvbldiOGNlMStGQXNDcWJTTVp3a21JelVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1YlRjWjk2eGFkSGJSTzJTSkZVSUgxaGtHZWVxVEdnR3B1YlJBZVNBa0drPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFCcGZlREtJb2g1NXNwKzRLY0xPQnJtbkdEeEtaZlc1ZE0xVjFnL2M0bEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRaQUVYNWFTVmVzTFBrYVpNMWJDdVNTcXZkM1ROazBNZzVwN3JRQXZOQ009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUxXcmpJdkY1U0l6NDJzOHluU3Z4Q2pIRFBtN3RCNCszL3hXS2VaaTBIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjIzN1p0YVJCbW1MSHU2ZGlFV2UrZ2xRMkF4Y0xKV2xucXhaTDNRaFZRND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdFbExsQU9lRlRtYlhzWGJua01YaHY2N2FmdXBzSHRrMGkrZGd0QWVuREFLUjh4elp6aC90U3YvcFZjZHJKQnMzUkFRejdyWWtUc05MZ1dHU1FNZkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJvS1Nqa2hTUHZLcThuQXlBcW1WWjhnS2JybG9IU2xtV0xIZ2ZkT0pIQzRVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxQm5TdU1QN1FfV2Z3RklMSjE5THZRIiwicGhvbmVJZCI6IjM1OTFkMzA0LWRhYTctNDEyNi1hYjMyLWQzY2EzZWMzZGVjZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1WkZ4djU3dW82SlZVOW9WV3grRUZ0L01jQms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibno3NTQ5dGFsRngwZ1RNQkJaRzBiQU9aeUtFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpXSzhMUDYyIiwibWUiOnsiaWQiOiIyMzQ5MDE5NDA2MTAyOjEwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNU0ZuZjhCRU1tMm9MVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4TGNhWnFiTTlLbUR3QUlUSUdlN3RndnIxZ1Mzbzh3V3MrSGRkeHhIYm5rPSIsImFjY291bnRTaWduYXR1cmUiOiI3TnBKWkhHOXFDTThnOWJlSGNIaHdHU3N4SE1kTnVhdjg3WVQ0ZDIzR0puYkxvRG81TmsybGpxSnVRK2NZREVkVTRvL1RacGhrMXg1RVFJcDVib3FBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTytRNzdKV080OUdwVE15eDhTdmRWRU5qTmk0b21zU0NjbjM3cVRqRjF4bm5SZkx0UmRVY3B6cWVodHlBQjZvMitwVnJvcW1qd25wM20wQlZjOXExQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDE5NDA2MTAyOjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNTM0dtYW16UFNwZzhBQ0V5Qm51N1lMNjlZRXQ2UE1GclBoM1hjY1IyNTUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIyOTMwNzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUE1GIn0="
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
