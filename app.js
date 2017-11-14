var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var rndstring = require('randomstring');
var cors = require('cors')();
require('./mongo');
require('./func');
var auth = require('./routes/auth')(express.Router(),Users,rndstring);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use(CORS);
app.use('/auth', auth);
app.listen(3000, (req,res)=>{
  console.log('Server Port on 3000');
});

module.exports = app;
