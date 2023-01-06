const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');

const indexRouter = require('./SRC/routes/index.routes');
const usersRouter = require('./SRC/routes/users.routes');
const productsRouter = require('./SRC/routes/products.routes');
const nosotrosRouter = require('./SRC/routes/nosotros.routes');
const localsMiddleware = require('./SRC/middleware/localsMiddle');
//const recordarmeMiddleware = require('./SRC/middleware/recordarmeMiddle');
const userLoggedMiddle = require('./SRC/middleware/userLoggedMiddle')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: "Secreto",
  resave: false,
  saveUninitialized: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(localsMiddleware);
app.use(userLoggedMiddle);

//app.use(recordarmeMiddleware);

app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

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




