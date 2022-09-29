const express=require("express");
const app= express();        //binds the express module to 'app'


app.get("/", function(req,res){
    res.send("Welcome to BasketCentre! A world full of basketball news and topics!");
});

app.listen(3000, function(){
    console.log("SERVER STARTED ON localhost:3000");
});