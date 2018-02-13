const { Schema } = require('mongoose');

module.exports = Schema({
  email: String,
  responded: { type: Boolean, default: false },
});
