const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');

const app = express();

app.get("/", (req, res) => {
	res.json({ message: "Welcome to Express!" });
});

app.use("/api/v1/users", userRouter);

module.exports = app;