const bcrypt = require("bcrypt");

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

const comparePword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

module.exports = {
  hashPword,
  comparePword,
};
