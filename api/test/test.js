// the linter thinks it's Jest expect when it is chai instead
/* eslint jest/valid-expect: "off" */

const { expect } = require('chai');
const mock = require('./mock');
const { encrypt, encryptSHA, compareHash } = require('../utils/encrypt');
const { createUser, getUserById } = require('../services/database/queries');


describe('Utils functions', () => {
  let sha = '';
  let dbHash = '';
  it('encryptSHA', () => {
    const password = 'my password';
    const email = 'my email';
    sha = encryptSHA(password, email);
    expect(sha).to.equal('f79b950fb602fa37c77177140564e6126421f79438e6f9205d44bf0a088675ac');
  });

  it('encrypt', () => {
    dbHash = encrypt(sha);
    expect(dbHash).not.to.equal(null);
  });

  it('compareHash', () => {
    const isValid = compareHash(sha, dbHash);
    expect(isValid).to.equal(true);
  });
});

describe('Database queries', () => {
  const { username, email, password } = mock.user;
  it('Create user', () => {
    createUser(username, email, password);
  });

  createUser(username, email, password)
    .then((reply) => {
      expect(reply).to.equal('OK');
    })
    .catch((err) => {
      throw new Error(err.message);
    });

  it('Get user data', () => {
    getUserById(email)
      .then((user) => {
        console.log('|||||||||||||||||||||| GET USER BY ID |||||||||||||||||||');
        expect(user.email).to.equal(mock.dbUser.email);
        expect(user.username).to.equal(mock.dbUser.username);
      })
      .catch((err) => {
        console.log('|||||||||||||||||||||| THROW |||||||||||||||||||');
        throw new Error(err.message);
      });
  });

  // it('Add token to blacklist', () => {
  //   addTokenToBlacklist(mock.loggedOuttoken)
  //     .then((user) => {
  //       console.log('|||||||||||||||||||||| GET USER BY ID |||||||||||||||||||');
  //       expect(user.email).to.equal(mock.dbUser.email);
  //       expect(user.username).to.equal(mock.dbUser.username);
  //     })
  //     .catch((err) => {
  //       console.log('|||||||||||||||||||||| THROW |||||||||||||||||||');
  //       throw new Error(err.message);
  //     });
  // });
});
