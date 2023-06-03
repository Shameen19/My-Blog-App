const mongoose = require("mongoose");

const connectDb = (url) => {
  mongoose.set("strictQuery", true); // suitable for searching fucntionality
  mongoose
    .connect(url)
    .then(() => console.log("Mongodb connected"))
    .catch((err) => console.log("Error occured at db", err));
};
module.exports = connectDb;
