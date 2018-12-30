const express = require('express');
const router = express.Router();

/* ===== WELCOME ROOT ROUTE ===== */
router.get('/', (req, res) => res.render('Welcome'))


module.exports = router;