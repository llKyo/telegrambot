const axios = require('axios');


const validarAPISimos = async () => {
    await axios.get(process.env.API_SISMOS)
        .then(r =>  console.log(`✅  OK    API Sismos.`))
        .catch(e => console.log(`❌ ERROR  API Sismos.`));
}

module.exports = {validarAPISimos};