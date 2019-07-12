const mongoose = require("mongoose");

const userModel = mongoose.model("user", {
  firstName: String,
  lastName: String
});

module.exports = userModel;
