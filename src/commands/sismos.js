const axios = require('axios');
const log = require('../log/log');

const sismos = (ctx, cantidad) => {

    log(ctx);
    
    ctx.reply(`Últimos ${ cantidad } sismos`);

    const requestSismos = axios.get(process.env.API_SISMOS);
    requestSismos.then( response => {
        const ultimosSismos = response.data;
        cantidad = cantidad <= ultimosSismos.length? cantidad:ultimosSismos.length;

        for (let i = 0; i < cantidad; i++) {

            const sismo = ultimosSismos[i];
            let { Fecha, Profundidad, Magnitud, RefGeografica, FechaUpdate  } = sismo;

            let respuestaSismos  = `Fecha: ${Fecha}\n`
            respuestaSismos     += `Profundidad: ${Profundidad} km\n`;
            respuestaSismos     += `Magnitud: ${Magnitud}\n`;
            respuestaSismos     += `Ubicación: ${RefGeografica}`;

            ctx.reply(respuestaSismos);
        }
    })
    .catch( e => {
        let mensaje_error = '❌ ERROR EN COMANDO SISMOS';
        //MENSAJE USUARIO
        ctx.reply('Error al obtener registro de temblores, probar mas tarde.');

        //ESTRUCTURA MENSAJE ERROR
        mensaje_error += `\n --- USUARIO ---`;
        mensaje_error += `\nID: ${ctx.message.from.id}`;
        mensaje_error += `\nNombre: ${ctx.message.from.username}`;
        mensaje_error += `\n --- ERROR ---`;
        mensaje_error += `\nError: ${e.code}`;
        mensaje_error += `\nMensaje: ${e.response.statusText}`;
        mensaje_error += `\nURL: ${e.config.url}`;
        mensaje_error += `\nMétodo: ${e.config.method}`;
        mensaje_error += `\nEstado: ${e.response.status}`;
        
        //MENSAJE CONSOLA
        console.log( mensaje_error);
        
        //MENSAJE CHAT PRIVADO CON USER_MASTER
        ctx.telegram.sendMessage(process.env.USER_MASTER, mensaje_error);

    });
};

module.exports = sismos;