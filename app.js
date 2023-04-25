const bodyParser = require("body-parser");
const express=require("express");

const app=express();
app.set('view engine', 'ejs');


app.get("/",function(){
var today = new Date();
 var currentDay=today.getDay();
 var day="";

if(currentDay===0||currentDay===6){
  day="weekend";
}
else{
    day="weekday";
};


app.get('/', (req, res) => {
    res.render('list', {kindofday: day});
  });


})

app.listen(4000,function(){
    console.log("server is up and running");
});