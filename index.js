const express = require("express");
const cors = require("cors");
const connection = require("./config/database");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).send("Home page");
});

app.listen(process.env.PORT, async () => {
  console.log("Server started");
  try {
    await connection;
    console.log("MongoDB is now connected");
  } catch (err) {
    console.log({ error: err.message });
  }
});
