const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// admin Schema
const AdminSchema = mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

});

const admin = module.exports = mongoose.model('Admins', AdminSchema);

module.exports.getAdminById = function (id, callback) {
  Admins.findById(id, callback);
}

module.exports.getAdminByUsername = function (username, callback) {
  const query = { username: username }
  Admins.findOne(query, callback);
}

module.exports.addAdmin = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
      if (err) throw err;
      newAdmin.password = hash;
      newAdmin.save(callback);
    });
  });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}

