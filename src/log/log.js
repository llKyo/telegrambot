const moment = require('moment');

const log = ctx => {
    const now       = moment().format('DD/MM/YY HH:mm:ss')
    const id        = ctx.message.from.id;
    const name      = ctx.message.from.first_name;
    const username  = ctx.message.from.username;
    const text      = ctx.message.text;
    const log = `[LOG ${now}] ${id} ${name} @${username} ${text}`
    console.log( log );
    ctx.telegram.sendMessage(process.env.USER_MASTER, log);
};

module.exports = log;