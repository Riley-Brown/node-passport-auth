const express = require('express');
const router = express.Router();

/* ===== WELCOME ROOT ROUTE ===== */
router.get('/', (req, res) => res.render('Welcome'))

/* ===== DASHBOARD ROUTE ===== */
router.get('/dashboard', (req, res) => res.render('Dashboard'))

module.exports = router;