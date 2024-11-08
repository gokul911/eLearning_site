const express = require('express');

const router = express.Router();

router.get("/", (req,res,next) => {
  res.render("users/home", {pageTitle : "Home"}); // views is already set. Hence, just write the ejs filename inside the views folder in render function.
});

module.exports = router;