const express=require("express");
const app=express();
const router=express.Router();
const volleyball=require("volleyball"); 
const nunjucks= require("nunjucks"); 
const routes = require('./routes');

app.use(volleyball);
app.use(express.static('public'));

app.use('/', routes);
app.engine("html", nunjucks.render);
app.set("view engine", "html");
nunjucks.configure('views', { noCache: true });


app.listen(3000, function(){
    console.log("You are on this port: 3000")
})

