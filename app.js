const bodyParser = require("body-parser");
const express=require("express");

const app=express();

app.listen(3000,function(){
    console.log("server is up and running");
});