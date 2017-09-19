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

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });



// app.use('/special', function(req,res,next){
//     console.log('you got to the special spot!');
//     next();
// });

// app.get( '/:stuff/', function(req,res){ 
//     // if(req.params.id) res.send("HI the thing after 3000 was " + req.params.stuff);
//     // res.send("HI there?");
// })
// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// app.get("/", function(req,res){
//     // res.send("hellowWorld");
//     res.render('index', {title: 'eating of the foods', people: people})    
// })

