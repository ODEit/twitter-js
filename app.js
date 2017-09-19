const express=require("express");
const app=express();
const router=express.Router();
const volleyball=require("volleyball"); 

app.use(volleyball);

app.use('/special', function(req,res,next){
    console.log('you got to the special spot!');
    next();
});

app.use(function(req,res,next){
    console.log(req.method + " " + req.originalUrl + " " +res.statusCode);
    next();
});

app.get( '/:stuff/', function(req,res){ 
    // if(req.params.id) res.send("HI the thing after 3000 was " + req.params.stuff);
    res.send("HI there?");
})
app.get("/", function(req,res){
    res.send("hellowWorld");
})
app.listen(3000, function(){
    console.log("You are on this port: 3000")
})