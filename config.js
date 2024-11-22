const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "+2348143319014"// Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-xSUHAIL_02_59_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3LFxuICAgICAgICA4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDQxLFxuICAgICAgICA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDUyLFxuICAgICAgICA2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICA3MixcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzLFxuICAgICAgICA0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM0LFxuICAgICAgICA3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU3LFxuICAgICAgICA5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExLFxuICAgICAgICA0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDkxLFxuICAgICAgICA2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzksXG4gICAgICAgIDc3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk0LFxuICAgICAgICA5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwLFxuICAgICAgICA1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTczLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImRnWVgxaCtlQ21UYk53eXNRTUZUT0FFMUpDb3QzSzhIbDVCRk92bDErWUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0MzMyOTAxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTAzNTcxMzM0M0Q4RjhERUQ2Q0I0M0Y3OEY5REEwQzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMjQ0MzcwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRqTzMyZFNuVGN5WFJnbmlKcUNhUWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzY4YTk5M2YtNGZmYy00ZjBlLWI5MDQtYTU1YzJlODkwN2VmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDI1MyxcbiAgICAgIDE1OSxcbiAgICAgIDkwLFxuICAgICAgMTkxLFxuICAgICAgMTM5LFxuICAgICAgMTc5LFxuICAgICAgMTU2LFxuICAgICAgMjQ3LFxuICAgICAgMjIxLFxuICAgICAgNzQsXG4gICAgICAwLFxuICAgICAgODYsXG4gICAgICA5OSxcbiAgICAgIDg3LFxuICAgICAgMjIxLFxuICAgICAgNDIsXG4gICAgICA2NSxcbiAgICAgIDYyLFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgNDgsXG4gICAgICAxMTIsXG4gICAgICAxNTksXG4gICAgICAxNjgsXG4gICAgICAxNjAsXG4gICAgICAxODMsXG4gICAgICAxNTksXG4gICAgICA0NSxcbiAgICAgIDIzLFxuICAgICAgMTE4LFxuICAgICAgMTI0LFxuICAgICAgMTIzLFxuICAgICAgMjI3LFxuICAgICAgMjYsXG4gICAgICA3NyxcbiAgICAgIDI1MixcbiAgICAgIDE0MyxcbiAgICAgIDE0NSxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNQWTUzUThSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQzMzI5MDE0OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNSiBNdWx0aXB1cnBvc2VcIixcbiAgICBcImxpZFwiOiBcIjg5Mjc1MzI0NDMyNTUyOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjdwL2ZJQ0VJam4vN2tHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2S01wc1Y4Tmw2a3BENWlJeGZHQXFuWmRkSFhoTzRvNmp1Z0l2WjY0R3c4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRBZFY2aXJIamNJYVFlZXhrbVlnNGNFYXdYQVRrbm1zZGt6OFhOWE5jdVF2QVNpNGxzLzVZYXZaU1U2bHBiQ0N3YWNuKzl0RHlNMmJjR0JMR01wOUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkthU3lKc215VU5yVlN3U1J2elNuQXFCcVBOSHJoTlJKV3ZQdmZHQXcza2htQlVVZUZOQVltcW52VnNvN3h4aU9PY1kvMkxYdkZnVlNKU1ovdzU2VmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDMzMjkwMTQ6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjI0NDM2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtZTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1lNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSlJadytlM0dBd1RxNUdPUTYzZUdNZkJCajc5V0Z4Y0RJMTA0SXBEUm01TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NzgwMDc3NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjI0MzMxNjE2N1wifSIKfQ==,
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
