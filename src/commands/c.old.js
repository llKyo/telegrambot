bot.start((ctx) => {
    ctx.reply('Welcome');
});

bot.help((ctx) => {
    ctx.reply('Help!');
});

bot.settings((ctx) => {
    ctx.reply('Settings');
});

bot.command('h', (ctx) => {
    const user = ctx.message.from;
    console.log(user);
    ctx.reply('Hi ' + user.first_name);
});

bot.hears('computer', ctx => {
    ctx.reply('Hey I am selling computer 😯');
})


bot.command('request', async(ctx) => {
   ctx.reply("Hi user, what is your request?");
   const r = await ctx.replyWithVoice('');
   console.log(r);
   ctx.reply(`Your answer was: ${r}`);
});

bot.on('text', ctx => {
    const user = ctx.message.from;

    if (user.first_name != 'Kyo') {
        ctx.reply('Todas putas, todas putas.')
    } else {
        ctx.reply('🐤💕')
    }
});

// bot.on('text', ctx => {
//     ctx.reply('Estás escribiendo...');
// })

// bot.on('text', ctx => {
//     ctx.getChat().then((ctx) => {
//         console.log(ctx);
//     }).catch((e) => {
//         console.log(e);
//     })
//     console.log();
//     ctx.reply('Te gustan los stickers 😯');
// })