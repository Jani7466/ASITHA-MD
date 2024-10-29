const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=uzRUhKRI#TYYTsco-MyXXPpb39kxbdRY2XSwcY__Hl9xiyDTC_ls",
MONGODB: process.env.MONGODB || "
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
