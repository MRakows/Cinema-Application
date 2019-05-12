const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('config');
const { User } = require('../models/User');

passport.use(new FacebookStrategy({
    clientID: 326245541406648,
    clientSecret: config.get('fbAppSecret'),
    callbackURL: "http://localhost:3000/fb_auth/fbcallback", // !
    profileFields: ['id']
}, async function (accessToken, refreshToken, profile, done) {
    let user = await User.findOne({
        'facebookId': profile.id
    });
    if (!user) {
        user = new User({
            facebookId: profile.id
        });
        await user.save(async function (err) {
            if (err) return done(err);
        });
    } else {
        return done(null, user);
    }
}))

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Got it!');
    res.setHeader('test', 'test completed')
    return res.status(200).send();
})

// router.get('/', passport.authenticate('facebook', {
//     display: 'popup'
// }));

router.get('/fbcallback', passport.authenticate('facebook', { failureRedirect: '/http://localhost:3000/0/cinema'}), async function(req, res) {
    console.log(req);
    console.log(res);
})

module.exports = router;