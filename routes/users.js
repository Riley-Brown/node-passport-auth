const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

/* ===== USER MODEL ===== */
const User = require('../models/User');

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
      msg: 'Passwords do not match'
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
    // validation passed
    User.findOne({
        email: email
      })
      .then(user => {
        if (user) {
          errors.push({
            msg: 'Email already exists'
          })
          // user already exists
          res.render('register', {
            errors,
            name,
            email,
            password,
            password2
          })
        } else {
          const newUser = new User({
            name,
            email,
            password
          });
          // hash password
          bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;

              // set password to hashed password
              newUser.password = hash;

              // save user to mongoDB
              newUser.save()
                .then(user => {
                  res.redirect('/login');
                })
                .catch(err => console.log(err))
            }))



        }
      })
  }

})

module.exports = router;