const log = require('../log/log');

const start = ctx => {
    log(ctx);
    ctx.reply(`Hola ${ ctx.message.from.first_name} 😊`);
    ctx.reply(`👋`);
};

module.exports = start;