require("dotenv").config();
const redisClient = require("./config/redis");
const connectDB = require("./config/database");
const { processUserEvent } = require("./controller/ListenerController");
const logger = require("./utils/logger");

// Connect to MongoDB
connectDB();

redisClient.subscribe("user_created", async (message) => {
  try {
    await processUserEvent(message);
  } catch (error) {
    console.error("Error processing user event:", error);
  }
});


logger.info("Listener Service is running...");
