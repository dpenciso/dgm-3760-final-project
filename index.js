const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000

dotenv.config();

app.use(express.static('src'));

app.listen(port, () => console.log(`Listening on port ${port}...`))