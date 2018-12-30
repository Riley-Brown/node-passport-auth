const express = require('express');
const router = express.Router();
const {
  ensureAuthenticated
} = require('../config/auth');

/* ===== WELCOME ROOT ROUTE ===== */
router.get('/', (req, res) => res.render('Welcome'))

/* ===== DASHBOARD ROUTE ===== */
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    name: req.user.name
  }))

module.exports = router;