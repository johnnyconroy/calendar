const express = require('express');
const processSignupForm = require('../services/authentication/signup');
const {
  verifyUser,
  generateToken,
} = require('../services/authentication/middleware');
const messages = require('../config/messages');

const router = new express.Router();

router.post('/signup', (req, res) => {
  processSignupForm(req.body)
    .then((result) => {
      if (!result.success) {
        return res.status(400).json({
          success: false,
          errors: result.errors,
        });
      }
      return res.status(200).send({ success: messages.accountCreated }).end();
    })
    .catch((err) => {
      throw new Error(err.message);
    });
});

router.post(
  '/login',
  verifyUser,
  generateToken,
  (req, res) => {
    const { user } = res;
    const { username, email } = user;
    const meetings = user.userEvents ? JSON.parse(user.userEvents) : [];
    res.status(200).send({
      user: {
        username,
        email,
        meetings,
        token: res.token,
      },
    }).end();
  },
);
module.exports = router;
