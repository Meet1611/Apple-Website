const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const crypto = require("crypto");
const dotenv = require("dotenv");
const User = require("./models/User");

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const JWT_SECRET = crypto.randomBytes(32).toString("hex");

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Cannot connect to MongoDB:", error));

app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const count = await User.countDocuments();
    const newUser = new User({
      id: count + 1,
      name: name,
      email: email,
      password: password,
    });
    newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check if the user is already registered
    let user = await User.findOne({ email: email });
    if (user) return res.status(400).send("User already exists");

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    console.log(hashPassword);

    //create a new user
    const count = await User.countDocuments();
    const newUser = new User({id: count + 1, name, email, password: hashPassword});
    await newUser.save();

    res.status(200).send({ name: newUser.name, email: newUser.email });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/login', async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).send("Invalid credentials");

    // compare the passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials");

    // create JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    
    // Respond with the token
    res.json({ token });
  }
  catch(error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });