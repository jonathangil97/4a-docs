const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class BookingAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.booking_api_url;
    }

    async createBooking(booking) {
        booking = new Object(JSON.parse(JSON.stringify(booking)));
        return await this.post('/bookings', booking);
    }

    async bookingByUsername(username) {
        return await this.get(`/bookings/${username}`);
    }

}

module.exports = BookingAPI;