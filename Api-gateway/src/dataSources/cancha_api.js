const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class CanchaAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.cancha_api_url;
    }

    async createCancha(cancha) {
        account = new Object(JSON.parse(JSON.stringify(cancha)));
        return await this.post('/canchas', cancha);
    }

    async canchaByNombre(nombre) {
        return await this.get(`/canchas/${nombre}`);
    }

    async removeCanchaBynombre(nombre) {
        account = new Object(JSON.parse(JSON.stringify(cancha)));
        return await this.post('/canchas', cancha);
    }

}

module.exports = CanchaAPI;