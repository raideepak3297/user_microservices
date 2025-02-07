const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./utils/logger");
const rateLimiter = require("./middleware/RateLimiter");
const healthRoutes = require("./routes/HealthRouter");

const app = express();
app.use(bodyParser.json());
app.use(rateLimiter);

app.use("/health", healthRoutes);

logger.info("Server started successfully!");
module.exports = app;
