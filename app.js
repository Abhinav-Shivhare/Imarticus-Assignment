const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var LocalStrategy = require('passport-local').Strategy;
const ejs=require("ejs");
const mongoose=require("mongoose");
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({
  extended:true
}));
mongoose.connect("mongodb+srv://naman:NAMANjaypee@cluster0.fymme.mongodb.net/?retryWrites=true&w=majority"
 ).then(()=>console.log("Database Connection Success")).catch((h)=>console.log(h));
 const Schema=mongoose.Schema;
 const lectureSchema = new Schema({
 topic:String,
 lecture:String
 });
 const lect=new mongoose.model("lecture",lectureSchema);


app.get("/",function(req,res){
  lect.find().then(function(lists){

    console.log(lists);
    res.render("home",{lists:lists});
    
    })
     
    
  });
app.listen(9003,function(req,res)
{
  console.log("Server started on port 9003");
})
