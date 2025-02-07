const { createUser } = require("../service/UserService");
const redisClient = require("../config/redis");

const createUserController = async (req, res) => {
  try {
    const { user, class: userClass, age, email } = req.body;

    if (!user || !userClass || !age || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const savedUser = await createUser({ user, class: userClass, age, email });

    // Publish event to Redis
    redisClient.publish("user_created", JSON.stringify(savedUser));

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createUserController };
