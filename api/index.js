const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Db Connection Successful!"))
  .catch((err) => console.log(err));

app.listen(8800, () => {
  console.log("Backend server is running!!!");
});
