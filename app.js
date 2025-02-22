const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')

const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')
const buyRouter = require('./routes/buy')
const cartRouter = require('./routes/cart')
const categoryRouter = require('./routes/category')
const detailsRouter = require('./routes/details')
const emptyRouter = require('./routes/empty')
const resetPasswordRouter = require('./routes/resetPassword')
const signupRouter = require('./routes/signup')
const searchRouter = require('./routes/search')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  cookie: {
    maxAge: 60 * 60000,
    sameSite: true,
    secure: false
  },
  resave: false,
  saveUninitialized: false,
  secret: 'T4ae(T3K'
}))

app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/buy', buyRouter)
app.use('/cart', cartRouter)
app.use('/category', categoryRouter)
app.use('/details', detailsRouter)
app.use('/empty', emptyRouter)
app.use('/resetPassword', resetPasswordRouter)
app.use('/signup', signupRouter)
app.use('/search', searchRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
