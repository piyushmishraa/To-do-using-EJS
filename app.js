const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
var items=["eat","sleep","code","repeat"];
app.get("/", function (req, res) {
  var today = new Date();
  
  
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var day = today.toLocaleDateString("en-US", options) ;

  res.render("list", { kindofday: day,newitems:items });
});

app.post("/",function (req,res) {
    forminput =req.body.input ;
    items.push(forminput);
    res.redirect("/");
})

app.listen(3000, function () {
  console.log("server is up and running");
});
