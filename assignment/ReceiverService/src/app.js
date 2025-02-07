const express = require("express");
const bodyParser = require("body-parser");
const receiverRoutes = require("./routes/ReceiverRouter");
const logger = require("./utils/logger");
const rateLimiter = require("./middleware/RateLimiter");

const app = express();
app.use(bodyParser.json());
app.use(rateLimiter);

app.use("/receiver", receiverRoutes);

logger.info("Server started successfully!");

module.exports = app;
