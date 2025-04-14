const User = require("../MODELS/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// exports.googleSignUp = async (req, res) => {
//   try {
//     const { token } = req.body;
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });

//     const { name, email } = ticket.getPayload(); // Google returns 'name' and 'email'

//     let user = await User.findOne({ email });
//     if (!user) {
//       user = new User({
//         username: name, // Mapping 'name' to 'username'
//         email,
//         password: "", // Password is optional for Google sign-up
//         role: "Buyer", // Default role
//         address: "N/A",
//         phone: "N/A",
//       });
//       await user.save();
//     }

//     res.status(200).json({ message: "Google sign-up successful!", user });
//   } catch (error) {
//     console.error("Error in googleSignUp:", error);
//     res.status(500).json({ error: "Google authentication failed." });
//   }
// };

exports.registerUser = async (req, res) => {
  const { name, email, password, role, address, phone } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User Already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      address,
      phone,
    });

    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("req.body", req.body);
  try {
    // Use findOne to get a single user based on email
    const user = await User.findOne({ email: email });
    console.log("user found in database", user);
    // Check if the user exists
    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare the received password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Exclude the password field from the user data response
    const { password: _, ...userData } = user.toObject();
    res.status(200).json({ token, user: userData }); // Send user data excluding password
  } catch (error) {
    console.log("user data error", error);
    res.status(500).json({ error: error.message });
  }
};
