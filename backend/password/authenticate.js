/**
 * @author Ajanthapan Agilaruben
 * This File contains the logic for authenticating users .
 *
 * @date 29/03/2024 - 15:39:28 PM
 *
 */

const bcrypt = require("bcrypt");

// This hashes the password using bcrypt.
const hashPword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
      }
      resolve(hash);
    });
  });
};

// This compares the plain text password with the hashed password provided.
const comparePword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

module.exports = {
  hashPword,
  comparePword,
};
