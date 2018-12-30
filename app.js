const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


const app = express();

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


/* ===== ROUTES ===== */
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

/* ===== PORT ===== */
const PORT = process.env.PORT || 5000;


/* ===== SERVER LISTEN ===== */
app.listen(PORT, () => console.log(`Server start on port ${PORT}`))