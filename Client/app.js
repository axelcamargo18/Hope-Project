const express = require("express");

const app = express();

const mysql = require("mysql");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "devuser",
  password: "Brianna3108$",
  database: "Energy_assis_program",
});

app.post("/register", function (req, res) {
  let person = {
    email: req.body.email,
  };
  connection.query(
    "INSERT INTO applicants SET ?",
    person,
    function (err, result) {
      if (err) throw err;
      // res.send("Thanks for joining us!");
      // res.redirect("/");
      log
    }
  );
});

app.listen(4000, function () {
  console.log("Server running on 4000!");
});

// connection.end();
