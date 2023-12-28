const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Listing = require("./models/listing");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;
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
  await mongoose.connect(DB_URL);
}

app.get("/testListing", async (req, res) => {
  const sampleListing = new Listing({
    title: "My New Villa",
    description: "My new home",
    price: 1200,
    location: "Delhi",
    country: "India",
  });

  await sampleListing.save();
  console.log("Saved");
  res.send("Added to db");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port...`);
});
