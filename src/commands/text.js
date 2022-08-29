const log = require('../log/log');

const text = ctx => {
    log(ctx);
    ctx.reply('🤔');
};

module.exports = text;