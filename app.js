const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Routes = require("./routes/index");
const app = express();

require('./models');

// Connect mongo
mongoose.connect("mongodb://127.0.0.1:27017/UserDB");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("Connection open");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Routes);

app.listen(3000, () => {
  console.log("Listening at :3000...");
})
