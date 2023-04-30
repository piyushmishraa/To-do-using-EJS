const bodyParser = require("body-parser");
const express = require("express");
const date=require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
var items=[];
var workitems=[];
app.use(express.static("public"))
app.get("/", function (req, res) {

  let  day = date.getDate();

  res.render("list", { listTitle: day,newitems:items });
});

app.post("/",function (req,res) {

  let forminput =req.body.input ;
  if (req.body.list === "Work") {
    workitems.push(forminput);
    res.redirect("/work");
  }  
  
  else{
   items.push(forminput)
   res.redirect("/");
  }

});

app.get("/work",function (req,res) {
  res.render("list", { listTitle: "Work List",newitems:workitems });
});

// app.post("/work",function(req,res){
//   forminput=req.body,input ;
//   workitems.push(forminput);
//   res.redirect("/work")
// })

app.get("/about",function (req,res) {
  res.render("about");
  
});


app.listen(3000, function () {
  console.log("server is up and running");
});
