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
var fs = require('fs');
var ejs

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



var port = process.env.PORT || 4000;
app.set('views', path.join(__dirname, 'views'));
app.set('port', port)
app.set('view engine', 'ejs');

var auth = require('./routes/auth')(express.Router(),Users,rndstring,passport,fs);
var list = require('./routes/list')(express.Router(),Users,List,rndstring,passport);
var find = require('./routes/finditem')(express.Router(),List,passport);
var openitem = require('./routes/open')(express.Router(),List, Users,passport);
var image = require('./routes/image');
var buy = require('./routes/buy')(express.Router(),Users,List,passport);
var final = require('./routes/final')(express.Router(), Users, List,passport);
var finds = require('./routes/find')(express.Router(), Users);
app.use('/auth', auth);
app.use('/list',list);
app.use('/finds',finds);
app.use('/find',find);
app.use('/open',openitem);
app.use('/image', image);
app.use('/buy',buy);
app.use('/final',final);
app.get('/',(req,res)=>{
  res.send(req.session.passport.user.final_visit);
});
app.get('/signin',(req,res)=>{
  res.render('login',{});
});
app.get('/info',(req,res)=>{
  res.send(req.session.passport.user.final_visit);
});

app.listen(3474,(req,res)=>{
  console.log('port on 3474');
});

module.exports = app;
