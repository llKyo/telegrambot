const log = require('../log/log');

const help = ctx => {
    log(ctx);
    let mensaje = `📣 • Lista de comandos • 🤖\n`;
    mensaje += `/start          El Bot de la bienvenida.\n`;
    mensaje += `/sismos      Retorna la lista de los últimos sismos en Chile.\n`;
    mensaje += `/settings    Configuración (EN DESARROLLO).\n`;
    mensaje += `/help           Retorna la lista de comandos.\n`;
    ctx.reply(mensaje);
};

module.exports = help;