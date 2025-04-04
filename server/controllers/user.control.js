const bcrypt = require("bcryptjs");
const User = require("../model/user");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET;

exports.Register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      EISNo,
      dob,
      department,
      designation,
      phoneNumber,
      bloodGroup,
      placeOfPosting,
      aadharNo,
      project,
      dateOfJoining,
      qualification,
      state,
      district,
      block,
      village,
      pin,
      landmark,
      whatsAppNo,
      photo,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      EISNo,
      dob,
      department,
      designation,
      phoneNumber,
      bloodGroup,
      placeOfPosting,
      aadharNo,
      project,
      dateOfJoining,
      qualification,
      state,
      district,
      block,
      village,
      pin,
      landmark,
      whatsAppNo,
      photo,
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      SECRET_KEY,
      { expiresIn: "3h" }
    );

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.GetUsers = async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, SECRET_KEY);

    if (decoded.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Forbidden: You do not have admin access" });
    }

    const users = await User.find().select("-password").sort({ createdAt: -1 });

    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
