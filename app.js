const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const app = express();

require('./models/user');

// Connect mongo
mongoose.connect("mongodb://127.0.0.1:27017/UserDB");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("Connection open");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRoutes);

app.listen(3000, () => {
  console.log("Listening at :3000...");
})
