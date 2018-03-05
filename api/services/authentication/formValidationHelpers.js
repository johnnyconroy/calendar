// @flow
const validator = require('validator');
const { compareHash } = require('../../utils/encrypt');
const getUserbyId = require('../database/queries/getUserData');

// regexp messing with eslint
/* eslint no-useless-escape: "off" */

const isValidEmail = (email: string): Promise<boolean> => new Promise((resolve) => {
  let isValid = true;
  if (!validator.isEmail(email)) {
    isValid = false;
    resolve(isValid);
  }
  getUserbyId(email).then((reply) => {
    if (reply !== null) isValid = false;
    resolve(isValid);
  });
  // client.hgetall(`user:${email}`, (err, reply) => {
  //   if (err) console.log(err);
  //   if (reply !== null) isValid = false;
  //   resolve(isValid);
  // });
});

const validPassword = (user: Object, formPassword: string) => {
  const dbPassword = user.HASHpwd;
  return compareHash(formPassword, dbPassword);
};

const isFormatPasswordValid = (password: string) => {
/*
            /^
              (?=.*\d)          // should contain at least one digit
              (?=.*[a-z])       // should contain at least one lower case
              (?=.*[A-Z])       // should contain at least one upper case
              [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
            $/
*/
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return re.test(password);
};

module.exports = {
  isFormatPasswordValid,
  isValidEmail,
  validPassword,
};