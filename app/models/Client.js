var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var clientSchema = mongoose.Schema({

  local: {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true

    },
    password: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    },
    phone: {
      type: Number,
      required: true
    },
    verified: {
      type: Boolean,
      required: true
    },
    start_hour: {
      type: String,
      required: true
    },
    end_hour: {
      type: String,
      required: true
    },
    working_days: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
  },
});
// generating a hash
clientSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
clientSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

const Client = module.exports = mongoose.model("client", clientSchema);

module.exports.findByClientName = function (clientName, callback) {
  const query = { name: { $regex: ".*" + clientName + ".*", $options: 'i' } };
  
  Client.find(query, callback);
}

module.exports.findByClientLocation = function (clientLocation, callback) {
  // const query = { location: clientLocation, verified: true };
  const query = { location: clientLocation };

  Client.find(query, callback);
}
module.exports.findByClientCategory = function (clientCategory, callback) {
  const query = { category: clientCategory };
  Client.find(query, callback);
}

// <<<<<<< HEAD
// =======
//rawan
// const client = module.exports = mongoose.model("client", clientSchema);
//getting unverified clients
module.exports.getClientsByVerificationStatus = (callback) =>{
  const query = {verified: "false"}
  Client.findByVerificationStatus(query, callback);
}
//verify Clients by deleting them from unverified clients
module.exports.VerifyClients = function(req, res) {
  Client.findByIdAndRemove(req.params.id, function(err, client) {
    if (err) {
      throw new Error(err);
    }
    res.send(client);
  });
};


// >>>>>>> de7397d57657435c23218f95463359110ade42c5
// module.exports = Client;
