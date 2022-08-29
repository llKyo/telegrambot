const { Telegraf } = require('telegraf');

const c = require('./comands');


const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.start(ctx => c.start(ctx));
bot.settings(ctx => c.settings(ctx));
bot.help(ctx => c.help(ctx));
bot.command('sismos', ctx => c.sismos(ctx, 5));
bot.command('hipster', Telegraf.reply('λ'));
bot.on('text', ctx => c.text(ctx));

// bot.telegram.sendMessage(703276929, 'ONLINE!');

module.exports = bot;
