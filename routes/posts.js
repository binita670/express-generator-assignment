const express = require('express');
const router = express.Router();
const fs = require("fs");
const dbPath = "./db/db.json";
var createError = require('http-errors');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile(dbPath, "utf-8", (err, data) => {
    if(err){
      console.log("Something went wrong!", err);
      return next(createError(err));
    }
    res.render('posts', { title: 'Posts', data: JSON.parse(data) });
  });
});

module.exports = router;
