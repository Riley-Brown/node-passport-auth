const express = require('express');
const app = express();


// routes
app.use('/', require('./routes/index'))

// port
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server start on port ${PORT}`))