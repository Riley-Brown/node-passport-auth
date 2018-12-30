const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

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