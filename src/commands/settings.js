const log = require('../log/log');

const settings = ctx => {
    log(ctx);
    ctx.reply('🙁');
};

module.exports = settings;