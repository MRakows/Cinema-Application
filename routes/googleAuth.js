const express = require('express');
const { User } = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
    let user = await User.findOne({googleId: req.body.googleID});

    if (user) {
        res.setHeader("userId", user._id)
        return res.status(200).send();
    } else {
        user = new User({
            googleId: req.body.googleID,
        })

        user.save()
            .then(function () {
                res.setHeader("userId", user._id)
                return res.status(201).send()
            })
            .catch(function (err) {
                console.log(err);
                res.setHeader("regStatus", "Database error")
                return res.status(404).send()
            })
    }
})

module.exports = router;