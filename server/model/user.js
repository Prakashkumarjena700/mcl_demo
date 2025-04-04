const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: "user",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    EISNo: {
      type: String,
      require: true,
    },
    dob: {
      type: Date,
    },
    department: {
      type: String,
      require: true,
    },
    designation: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    bloodGroup: {
      type: String,
      trim: true,
    },
    placeOfPosting: {
      type: String,
      trim: true,
    },
    aadharNo: {
      type: String,
      trim: true,
    },
    project: {
      type: String,
      trim: true,
    },
    dateOfJoining: {
      type: Date,
    },
    qualification: {
      type: String,
    },
    state: {
      type: String,
    },
    district: {
      type: String,
    },
    block: {
      type: String,
    },
    village: {
      type: String,
    },
    pin: {
      type: String,
    },
    landmark: {
      type: String,
    },
    whatsAppNo: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
