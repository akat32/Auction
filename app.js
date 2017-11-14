var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var rndstring = require('randomstring');
var CORS = require('cors')();
app.use(CORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
require('./mongo');
require('./func');
var auth = require('./routes/auth')(express.Router(),Users,rndstring);
var list = require('./routes/list')(express.Router(),Users,List,rndstring);
app.use('/auth', auth);
app.use('/list',list);
app.listen(3000, (req,res)=>{
  console.log('Server Port on 3000');
});

module.exports = app;
