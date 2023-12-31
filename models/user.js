const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, maxLength: 30 },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

UserSchema.virtual("url").get(function () {
  return `/home/category/${this._id}`;
});

module.exports = mongoose.model("User", UserSchema);
