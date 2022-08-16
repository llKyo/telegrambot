const log = require('../log/log');

const start = ctx => {
    log(ctx);
    ctx.reply('🤔');
};

module.exports = start;