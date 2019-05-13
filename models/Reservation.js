const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    movieId: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    seatId: {
        type: String,
        required: true
    }
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;