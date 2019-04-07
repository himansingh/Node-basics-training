// https://www.sitepoint.com/create-new-express-js-apps-with-express-generator/
// Theory of streams and buffers => https://medium.freecodecamp.org/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8
// Using Streams in Nodejs => https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93
// Using Streams in Nodejs => https://www.guru99.com/node-js-streams-filestream-pipes.html

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const index = require('./routes/index');
const users = require('./routes/users');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json()); // makes json data sent in POST request available to req.body
app.use(bodyParser.urlencoded({
    extended: false
})); // Like above but for query strings
app.use(cookieParser()); // For easy handling ocookies

app.use('/index', index);
app.use('/users', users);



app.get('/', (req, res) => {
    console.log('route /')
    res.send('This is Home page')

});
module.exports = app;