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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0N5MlFzN0UxUXA4c1ZKVFFMU0RoWjNnSmhaQTFVQm5MZjgxeGZ5cXMxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUl3eFc4ZXlpdGZ3T2x2TVdKRjdSMk0wR051OVRSenlxMUZFelZyYnYzdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRUlPY0ZSNXhVMkNHOUk5V2NiVkRKSE4zcTFuNml4R1NPMlNvZjMvNWxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvQnlCZ0lPZ2R5eVg1aUlGWCtvOHZmZW9pT1d6eXV6UHhNNUIrY0UwVkZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHMTI2byszTkpwLzgrcGNiTHF2WUszbm9hdG1SNjRrNVBDSXdlaEVQM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNuZDZvM2hhdXZDa0FkRHgxMVRjSDI5NnlnNkhNQXdUSnJOR1FxTy9HbVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0hIVU9sWFVvKzl6RFUrQVM1THFlSWxYZXB2eDd0bUNmZnZIbnNvVXQzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazNnblc1SkQyc0dkaEd2cnY2S0ZNWmJERlhWajRFSldGVlB4b01pbzJEUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxlOEFYVjFjclpQbFZDWWloWWs0OVgvaCtuVjU4VXNRU2xlTlJTM3pHb0dZcEc1TnV0eE1BVHFHVlhOUTJxaVl4b0syeWk4Umh5MzBtMUl6cHZpS0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJoeHBzOEZQdUV6WXJHWmJHYVlpR1U3ZCtDZTNFeFFsUm1Td0J0Z2hmNDkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNzAyMzkwMDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTI3MjJDMjQxMDc5RTlGODFERTk1NkE4RDE0ODgyMjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjg2ODgzMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA3MDIzOTAwNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMEYzMEQ2RjQ0NTBCRjQwOEVEMkY2NzlCNEYwMUYxNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyODY4ODMxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4dG1yR3hmTlR5aUsyZGM0Yy0yQzd3IiwicGhvbmVJZCI6ImM2OTE4ZGY1LTI2NzQtNDllMi05MDUzLWMyODI5MWEyODAxNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkV1NJZ2FDUnZmVkI3VHk0T3RtVlZmUlV3OEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09yV0F6MmpWeDVyekx4WVhuQWtnSXRBZzhnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVDTEJBWU1CIiwibWUiOnsiaWQiOiIyMzQ3MDcwMjM5MDA0OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJlY2t5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMekVwWmNIRU03SXc3VUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqVWVVVTlRdHdIWlFhQTFodzRUZUJUVU1jVFJJSlF0Vk8xVlMyWlZRa2xZPSIsImFjY291bnRTaWduYXR1cmUiOiJsUFRsWVJmajdySEZRNkx6RDlqSzRhYWNVOGcrVUpXRW5HdUxQRDhycE4vaURpS2NRZjIzT1gwYkdGd01aaTd4SDB0UzYrc3JobDk0VVJnbmZFZldBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR1RockZUY01iL3dWenhQREdkTTlneUk2OEpjL2p0VU44OG91ZDU1dFdCOTVsSTRBUFhQNXR3dFJ0elRiRGljR2xnNlRnc2J4bVNOdkt6d1FidXRsQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDcwMjM5MDA0OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlkxSGxGUFVMY0IyVUdnTlljT0UzZ1UxREhFMFNDVUxWVHRWVXRtVlVKSlcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4Njg4MjcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTkJPIn0="
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
