const User = require("../models/UserModel");
const logger = require("../utils/logger");

const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    logger.info("User saved to database:", savedUser);
    return savedUser;
  } catch (err) {
    logger.error("Database error:", err);
    throw new Error("Error saving user to database");
  }
};

module.exports = { createUser };
