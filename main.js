require("dotenv").config();

const bot = require('./src/bot');
const validarInicio = require('./src/validarInicio');

console.clear();

const inicio = new Date();

console.log('Iniciando... \n');
bot.launch()
    .then( ( ) => console.log(`✅  OK    Bot de Telegram @${ bot.botInfo.username }.`))
    .catch((e) => console.log(`❌ ERROR  [ERROR ${e.response.error_code}] Error al iniciar el bot`))
    .finally( async () => {
        await validarInicio.validarAPISimos();
        const fin = new Date();
        console.log(`\n${(fin-inicio)/1000}s Done!\n`);
    });
