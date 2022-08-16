const { request } = require('../utils/axios');
const log = require('../log/log');

const sismos = (ctx, cantidad) => {
    log(ctx);
    const requestSismos = request(process.env.API_SISMOS);
    ctx.reply(`Últimos ${ cantidad } sismos`);
    requestSismos.then( response => {
        const ultimosSismos = response.data;

        cantidad = cantidad <= ultimosSismos.length? cantidad:ultimosSismos.length;

        for (let i = 0; i < cantidad; i++) {
            const sismo = ultimosSismos[i];
            let { Fecha, Profundidad, Magnitud, RefGeografica, FechaUpdate  } = sismo;
            ctx.reply(`Fecha: ${Fecha} \nProfundidad: ${Profundidad} km\nMagnitud: ${Magnitud}\nUbicación: ${RefGeografica}`);
        }
        
    })
    .catch( e => {
        console.log( e );
    });
};


module.exports = sismos;