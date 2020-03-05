const express = require('express');
const app = express();
const db = require('./db');
const port = 3000;
const adminRouter = require("./admin-controller.js");
app.use("/admin",adminRouter);


app.listen(port,() => console.log(`Quiz app listening on port ${port}!`));