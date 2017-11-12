var express = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var rndString = require('randomstring');
var session = require('express-session');
var app = express();

require('./mongo');
require('./func');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));

var auth = require('./routes/auth')(express.Router(), Users, rndString);
var auction = require('./routes/auction')(express.Router(), List, Users, rndString);
var search = require('./routes/search')(express.Router(),Users);
//var image = require('./routes/image')(express.Router());
app.use('/auction', auction);
app.use('/auth', auth);
app.use('/search', search)
//app.use('/image', image);

server.listen(3000, (req,res)=>{
  console.log('Server Port on 3000');
});


module.exports = app;
