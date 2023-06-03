const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Register = require("../server/routes/registerroute");
const connectDb = require("../server/mongodb/connect");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(Register);

const startserver = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    console.log("DB connected successfully");
  } catch (Err) {
    console.log("Error occuredd here ", Err);
  }
};

startserver();

app.listen(4008, () => {
  console.log("Listening on http://localhost:4008");
});
