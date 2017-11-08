var express = require('express');
var bodyParser = require('body-parser');
var app = express();
require('./mongo');
require('./func');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));

var auth = require('./routes/auth')(express.Router(), Users);
app.use('/auth', auth);



app.listen(3000, (req,res)=>{
  console.log('Server Port on 3000');
});


module.exports = app;
