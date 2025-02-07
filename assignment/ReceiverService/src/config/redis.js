const redis = require("redis");

const redisClient = redis.createClient({
  url: 'redis://localhost:6379'  // Use this for local Redis
});

// Handle connection events
redisClient.on("error", (err) => console.error("Redis Error:", err));
redisClient.on("connect", () => console.log("Redis connected"));

// Initialize connection
const connectRedis = async () => {
  try {
      await redisClient.connect();
      console.log("Connected to Redis successfully");
  } catch (err) {
      console.error("Redis connection error:", err);
  }
};

// Connect to Redis
connectRedis();

redisClient.on("error", (err) => console.error("Redis Error:", err));

module.exports = redisClient;
