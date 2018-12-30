const express = require('express');
const router = express.Router();

/* ===== LOGIN ===== */
router.get('/login', (req, res) => res.render('Login'))

/* ===== REGISTER ===== */
router.get('/register', (req, res) => res.render('Register'))
module.exports = router;