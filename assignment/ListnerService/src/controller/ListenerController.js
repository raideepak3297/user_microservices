const { saveProcessedUser } = require("../service/UserService");
const validateUserData = require("../middleware/validator");
const logger = require("../utils/logger");

const processUserEvent = async (message) => {
  try {
    const userData = JSON.parse(message);
  
    // Validate Data
    const { error } = validateUserData({
      ref: userData._id,
      user: userData.user,
      class: userData.class,
      age: userData.age,
      email: userData.email,
      inserted_at: userData.inserted_at,
      modified_at: new Date(),
    });
    if (error) {
      logger.error("Invalid Data Received:", error.details[0].message);
      return;
    }

    // Save processed user
    await saveProcessedUser(userData);
  } catch (err) {
    logger.error("Error processing event:", err);
  }
};

module.exports = { processUserEvent };
