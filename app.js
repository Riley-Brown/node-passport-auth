const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport')

const app = express();

/* ===== PASSPORT CONFIG ===== */
require('./config/passport')(passport);

/* ===== DB CONFIG ===== */
const db = require('./config/keys').MongoURI;

/* ===== CONNECT TO MONGO ===== */
mongoose.connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log('mongo db connected'))
  .catch(err => console.log(err))


/* ===== EJS MIDDLEWARE ===== */
app.use(expressLayouts);
app.set('view engine', 'ejs');


/* ===== BODYPARSER MIDDLEWARE ===== */
app.use(express.urlencoded({
  extended: false
}))


/* ===== EXPRESS SESSION MIDDLEWARE ===== */
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

/* ===== PASSPORT MIDDLEWARE ===== */
app.use(passport.initialize());
app.use(passport.session());

/* ===== CONNECT FLASH MIDDLEWARE ===== */
app.use(flash());

/* ===== GLOBAL VARS ===== */
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
})


/* ===== ROUTES ===== */
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))


/* ===== PORT ===== */
const PORT = process.env.PORT || 5000;


/* ===== SERVER LISTEN ===== */
app.listen(PORT, () => console.log(`Server start on port ${PORT}`))