const bodyParser = require("body-parser");
const express = require("express");

const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');
const itemsSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model('Item', itemsSchema);

const item1 = new Item({
   name: 'Welcome to-do list'
   });

const item2 =new Item({
  name: "Hit + to add a nwe item"
}) ;   

const item3=new Item({
  name:"press <--- to delete an item"
});

const defaultItems=[item1,item2,item3];

Item.insertMany(defaultItems)
      .then(function () {
        console.log("Successfully saved defult items to DB");
      })
      .catch(function (err) {
        console.log(err);
      });

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"))
app.get("/", function (req, res) {


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
