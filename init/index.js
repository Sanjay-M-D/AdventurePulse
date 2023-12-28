const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const DB_URL = process.env.DB_URL;

console.log(DB_URL);

databaseConnection()
  .then(() => {
    console.log("DB Connected Successfully...");
  })
  .catch((err) => {
    console.log(err);
  });

async function databaseConnection() {
  await mongoose.connect(DB_URL, {});
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
