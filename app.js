const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyparser = require("body-parser");
const cors = require("cors");

//parser    =====middleware
app.use(bodyparser.json());
app.use(cors());
//import routes    =====middleware
const userroutes = require("./routes/user");
app.use("/users", userroutes);
//
const studentroutes = require("./routes/students");
app.use("/student", studentroutes);
//
const itemsroutes = require("./routes/items");
app.use("/items", itemsroutes);
//
const billroute=require('./routes/bill');
app.use("/bill",billroute)

//get request
app.get("/", (req, res) => {
  res.send("<h1>this is home page</h1>");
});

//connect to db
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

//listner
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
