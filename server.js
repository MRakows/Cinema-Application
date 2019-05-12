const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');
const passport = require('passport');
require('mongoose').Promise = global.Promise

const standardRegister = require('./routes/standardRegister');
const facebookAuth = require('./routes/facebookAuth');
const googleAuth = require('./routes/googleAuth');
const standardLogin = require('./routes/standardLogin');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.use(passport.initialize());
app.use(passport.session());

app.use('/:movie_id/cinema/auth/sReg', standardRegister);
app.use('/:movie_id/cinema/auth/sLogin', standardLogin);

app.use('/fb_auth', facebookAuth);
app.use('/google_auth', googleAuth);

app.get('/api/movies', (req, res) => {
    res.send({
        express: 'Hello From Express'
    });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

mongoose.connect(config.get('db'), {useNewUrlParser: true})
    .then(() => {
        console.log('Connected to database...');
    })
    .catch((err) => {console.log(err)})