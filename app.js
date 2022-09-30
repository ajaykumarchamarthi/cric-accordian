const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("*", cors());

app.use(express.json());

const profileRoutes = require("./routes/profileRoutes");

app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/national", profileRoutes);
app.use("/api/v1/domestic", profileRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to ACCORDIAN TASK APP backend",
  });
});

app.all("*", (req, res, next) => {
  res.status(404).json({
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

module.exports = app;
