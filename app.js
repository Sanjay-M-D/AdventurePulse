const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;

databaseConnection()
  .then(() => {
    console.log("DB Connected Successfully...");
  })
  .catch((err) => {
    console.log(err);
  });

async function databaseConnection() {
  await mongoose.connect(DB_URL);
}

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port...`);
});
