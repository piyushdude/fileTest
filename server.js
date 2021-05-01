const express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.use(function (req, res, next) {
  /*var err = new Error('Not Found');
   err.status = 404;
   next(err);*/

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});

app.use(express.static('uploads'));
app.use(express.static('pdf'));
const bodyparder = require('body-parser');
app.use(bodyparder.json({limit: "50mb"}));
app.use(bodyparder.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(bodyparder.json());

app.listen(process.env.PORT || 3000, () => console.log('running'));

module.exports = app;