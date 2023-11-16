const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const userRouter = require('./routes/user-router');
const welcomeRouter = require("./routes/welcome-router");
const linkRouter = require("./routes/link-router");

const app = express();
app.use(express.json());

app.use("/", welcomeRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/links", linkRouter);

module.exports = app;