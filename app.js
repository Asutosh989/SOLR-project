const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const log = require('winston');

const routes = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware setup
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes setup
app.use('/', routes);

// / catch 404 and forwarding to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _) => {           // required by specification
  console.log("Error");
  const status = err.status || 500;
  if (status >= 500) {
    log.error(err);
  }
  res.status(status);
  res.render('error', {
    message: err.message,
    statusCode: res.statusCode,
    statusMessage: res.statusMessage,
    error: app.get('env') === 'production' ? {} : err,
  });
});

module.exports = app;
