const User = require("../models/UserModel");
const logger = require("../utils/logger");

const saveProcessedUser = async (userData) => {
  try {
    const updatedUser = new User({
      ref: userData._id,
      user: userData.user,
      class: userData.class,
      age: userData.age,
      email: userData.email,
      inserted_at: userData.inserted_at,
      modified_at: new Date(), // Add modified timestamp
    });

    await updatedUser.save();
    logger.info("User processed & saved:", updatedUser);
  } catch (err) {
    logger.error("Database error:", err);
    throw new Error("Error saving processed user");
  }
};

module.exports = { saveProcessedUser };
