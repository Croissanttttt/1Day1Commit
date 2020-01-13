const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/*app.use(function(req, res, next) {
  console.log(req.url, '저도 미들웨어입니다');
  next();
});*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', function(req, res, next) {
  console.log('첫 번째 미들웨어');
  next();
}, function(req, res, next) {
  console.log('두 번째 미들웨어');
  next();
}, function(req, res, next) {
  console.log('세 번째 미들웨어');
  next();
});

/*app.use(function(req, res, next) {
  if (Date.now() % 2 === 0) {
    return res.status(404).send('50% 실패');
  } else {
    next();
  }
}, function(req, res, next) {
  console.log('50% 성공');
  next();
});*/

app.use(logger('dev'));// dev, short : 개발시 , common, combined : 배포시
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret code'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'secret code',
  cookie: {
    httpOnly: this,
    secure: false,
  },
}));
app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;
