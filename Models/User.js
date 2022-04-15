const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    address: { type: String},
    cin : { type: String},
    password: { type: String },
    ConfirmPassword: { type: String },
    //profilePicture: { type: String },
    isVerified: { type: Boolean },
    //role: { type: String }
  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
);
module.exports = mongoose.model("User", UserSchema);
