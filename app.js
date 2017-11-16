var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var rndstring = require('randomstring');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var sessionstore = require('sessionstore');
var store = sessionstore.createSessionStore();
var cookie = require('cookie');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

var CORS = require('cors')();
app.use(CORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
require('./mongo');
require('./func');
app.use(cookieSession({
  keys: ['h0t$ix'],
  cookie: {
    maxAge: 1000 * 60 * 60 // 유효기간 1시간
  }
}))
let passport = require('./passport')(Users);
app.use(passport.initialize());
app.use(passport.session());



var auth = require('./routes/auth')(express.Router(),Users,rndstring,passport);
var list = require('./routes/list')(express.Router(),Users,List,rndstring,passport);
var find = require('./routes/finditem')(express.Router(),List,passport);
var openitem = require('./routes/open')(express.Router(),List, Users,passport);
var image = require('./routes/image');
var buy = require('./routes/buy')(express.Router(),Users, passport);
var final = require('./routes/final')(express.Router(), Users, passport, List);

app.use('/auth', auth);
app.use('/list',list);
app.use('/find',find);
app.use('/open',openitem);
app.use('/image', image);
app.use('/buy',buy);
app.use('/final',final);
app.get('/',(req,res)=>{
  res.send('fuck');
});
app.listen(3469,(req,res)=>{
  console.log('port on 3469');
});

module.exports = app;
