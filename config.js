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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENQTFQzMWFBQ0l3VG9lUU1TQTVxYUxDemVjVFFYMlVKSWpHRHU5RlpFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVpmZnp0SXRLSEtrNVZRT3RPMHN3ZEozKzhQanZZMmkzZU4xMjljSmszcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Q280UVVJZ1ExN0ZOb2xFM2FZUmpyMlM1aG10K0UvK3pjWFBOVUFqMjJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmNGloQkZFRFFtbHJRMkUzTEVHS3o0VzZFYldERGp2SUIvZDI4QkZBLzBvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGSENqRjVWYjRCZG9VcE9sWUcvNk11Q05mQ0lvUFRqT3QrQTRCMWVYVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1YNXNFYzBlU3k5WktzV1RMSDJnZFJtUzVpQlJYOTZuclh0VUx0VFVlV2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUlUWWt0QlkzMWhKR3FsSVpEYlNPeXhJbVJocXBxN2ZQVXBrVjJsbWUwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUldxcWR3UnhieC9TM0FHK1ovbVNLS0lIcU1oYzFUeGVidUg2VGpSUnJCbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZwdUJGWWFrekg0aHpEZ1FQeXp2T3I0c1o1ODYxQVpCbHN6TkJSRFVLalMrelVPdFl5SEJsZE1RM2hFNTBramVIaVRUUkMvVHplZS9seU1UUFJwTGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJMWm95SWE1NmZjNVR6dzQ2d1dGMVQwN2VBTjhBT1c4N3YyNk9CNXFFRGMwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiOVh5ekFJSFJlMnZQYWtFY0lVZ3pBIiwicGhvbmVJZCI6Ijk0NzU1Y2I2LWJjNGQtNGUzMC05YzQxLThkZTY1MDJiODEyNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QzRGS0NLN2tnbUpBTTFVaHZxMU1aOWdPLzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2ZOaFZidVBRK2ZSbURZRDJJeTBnOVlRWXRJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpOVEtXWE5IIiwibWUiOnsiaWQiOiIyMzQ5MDE5NDA2MTAyOjEyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNU0ZuZjhCRUl6K29iVUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4TGNhWnFiTTlLbUR3QUlUSUdlN3RndnIxZ1Mzbzh3V3MrSGRkeHhIYm5rPSIsImFjY291bnRTaWduYXR1cmUiOiJWYnZYRkd2akh0bTF1NDVNOENuSDMyc0dMeVdFeTB1K3ZWWW5QU0t2WnF0dUptcEt0M1VTalNKKzZxeGl6RjMyaGpyZURDbEVuZmswc1AvU1MyRGZCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNk5vNUJVZG5ZQjR2MnUwaWtVKzFBc0Jrd3ZRWGdFUHRuZEpGNXJNbk80c29BWFEvQkw3YnU0bFlWelZsdjBXUTltOXI1WUk0QnFrOExmL29OaDFsaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDE5NDA2MTAyOjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNTM0dtYW16UFNwZzhBQ0V5Qm51N1lMNjlZRXQ2UE1GclBoM1hjY1IyNTUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIzMTg2MTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUE1GIn0="
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
