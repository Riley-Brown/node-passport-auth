const express = require('express');
const router = express.Router();

/* ===== LOGIN ===== */
router.get('/login', (req, res) => res.render('Login'))

/* ===== REGISTER ===== */
router.get('/register', (req, res) => res.render('Register'))
module.exports = router;


/* ===== REGISTER NEW HANDLE ===== */
router.post('/register', (req, res) => {
  const {
    name,
    email,
    password,
    password2
  } = req.body

  let errors = [];

  // check required fields
  if (!name || !email || !password || !password2) {
    errors.push({
      msg: 'Please fill in all fields'
    })
  }

  // check if passwords match
  if (password !== password2) {
    errors.push({
      mesg: 'Passwords do not match'
    })
  }

  // check password length
  if (password.length < 6) {
    errors.push({
      msg: 'Password should be at least 6 characters'
    })
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    })
  } else {
    res.send('pass')
  }
  res.send('hello')
})

module.exports = router;