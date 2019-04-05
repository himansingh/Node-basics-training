// https://www.sitepoint.com/create-new-express-js-apps-with-express-generator/

const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var index = require('./routes/index');
var users = require('./routes/users');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json()); // makes json data sent in POST request available to req.body
app.use(bodyParser.urlencoded({ extended: false })); // Like above but for query strings
app.use(cookieParser()); // For easy handling ocookies

app.use('/index', index);
app.use('/users', users);



app.get('/', (req, res) => {
    console.log('route /')
    res.send('This is Home page')

});
module.exports = app ;