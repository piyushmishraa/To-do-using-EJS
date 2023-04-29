const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
var items=["eat","sleep","code","repeat"];
var workitems=[];
app.use(express.static("public"))
app.get("/", function (req, res) {
  var today = new Date();
  
  
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var day = today.toLocaleDateString("en-US", options) ;

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
