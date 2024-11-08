const path = require("path");
const express = require("express");

const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({extended : true}));

const userRoutes = require("./routes/users");

app.set('view engine','ejs');
app.set('views','views');

app.use(userRoutes);

app.use("/", (req,res,next) => {
  res.send("<h1> Page Not Found </h1>");
});

app.listen(4000, () => {
  console.log("server starts on port 4000");
});