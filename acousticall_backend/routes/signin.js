const User = require('../models/user'); // Assuming your user model is in the 'models' folder
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
router.post('/signup', async (req, res) => {
    const {
      firstName,
      lastName,
      phone,
      email,
      password,
      disabilityType,
      currentLocation,
      dob,
    } = req.body;
  
    try {
      // Check if the user with the provided email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists.' });
      }
  
      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user instance
      const newUser = new User({
        firstName,
        lastName,
        phone,
        email,
        password: hashedPassword,
        disabilityType,
        currentLocation,
        dob,
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  module.exports = router;