require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(expressLayouts);

app.set('layout', 'layout');


app.get("/", (req, res) => {
    res.render("index", {});
});

let PORT = process.env.PORT
if (PORT == null || PORT == "") {
  PORT = 3001;
}

app.listen(PORT, function () {
  console.log("Server started on port " + PORT);
});