const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const routes = require("./routes/index");
const httpStatus = require("http-status");
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.options("*", cors());
app.use("/api", routes);
app.use("/demo", (req, res, next) => {
  next("Hello from demo.........");
});
app.use((req, res, next) => {
  res.send("Hello welcome to you");
});

module.exports = app;
