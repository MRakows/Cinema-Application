const express = require('express');
const {User, validate} = require('../models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async function(req, res) {
    const result = validate(req.body);
    if (result.error) {
        res.setHeader('loginStatus', 'Invalid user data.');
        return res.status(400).send();
    }

    let user = await User.findOne({
        email: req.body.email
    });

    if (!user) {
        res.setHeader("loginStatus", "User with given email not found.");
        return res.status(404).send();
    } else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if(result==true) {
                res.setHeader('userId', user._id);
                return res.status(200).send();
            } else {
                res.setHeader('loginStatus', 'Invalid password.');
                return res.status(400).send();
            }
        });
       }
    });


module.exports = router;