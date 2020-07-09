//Initialize web app and express package
var express = require('express');
var app = express();
//body parser object init
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
//Variable responsible for pulling mongo json data
    //FIXME: IMPLEMENT MONGODB RETRIEVAL
var entries = ["wow", "owen wilson"];
var complete = ["yeet"];

//post route for adding entry
app.post('/addtask', function (req, res) {
    var newEntry = req.body.newtask;
    entries.push(newEntry);
    res.redirect("/");
});
//render the ejs and display added task, 
//entries(index.ejs) = entries(array);
app.get("/", function(req, res) {
    res.render("index", {entries: entries, complete: complete});
});

app.listen(8080, function() {
    console.log('open localhost:8080 on chrome to see app');
});

app.set('view engine', 'ejs');
