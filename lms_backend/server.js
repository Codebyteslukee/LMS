const express = require("express");
const dbconnect = require("./config/dbConnect");
const { notFound, handlerError } = require("./middlewares/errorHandler");
const userRouter = require("./routes/userRoutes");
const bodyPraser = require("body-parser");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const PORT = process.env.PORT || 5000;

 dbconnect();
 
 app.get("/", (req, res) => {
  res.send("hello from lms server");
 })

 app.use(bodyPraser.json());
 app.use(bodyPraser.urlencoded({extended: false}));
 

 app.use("/api/user", userRouter);

 app.use(notFound);
 app.use(handlerError);

 app.listen(PORT, () => {
  console.log(`Server is running at http://localhost: ${PORT}`);
});