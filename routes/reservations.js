const express = require('express');
const Reservation = require('../models/Reservation');

const router = express.Router();

router.post('/', async (req, res) => {
    let exists = false;
    // Reservation.find({movieId: req.body.movieId, userId: req.body.userId, seat: req.body.seatId}, (err, docs) => {
    let reservation = await Reservation.findOne({ $and: [{movieId: req.body.movieId}, {userId: req.body.userId}, {seatId: req.body.seatId}]});
    if (reservation) {
        res.setHeader('reservation_status', 'reservation already exists');
        res.status(400).send();
    } else {
        reservation = new Reservation({
            movieId: req.body.movieId,
            userId: req.body.userId,
            seatId: req.body.seatId
        })
        reservation.save()
            .then(function() {
                res.setHeader('seatId', reservation.seatId);
                res.status(201).send();
            })
            .catch(function(err) {
                res.setHeader('reservation_status', 'database error');
                res.status(404).send();
            })
    }
})

router.get('/:movie_id', async (req, res) => {
    let movieReservations = await Reservation.find({movieId: req.params.movie_id});
    if (movieReservations.length == 0) {
        res.setHeader('found_any', 'no');
        res.status(404).send();
    } else {
        res.setHeader('found_any', 'yes');
        res.status(200).send(movieReservations);
    }
})

module.exports = router;