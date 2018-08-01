var createError = require('http-errors');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var apiRouter = require('./routes/beer');

var app = express();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/beers')
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist/NGRX')));

app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send(err.status);
  });


module.exports = app;
