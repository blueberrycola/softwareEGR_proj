//Initialize web app and express package
var express = require('express');
var app = express();
//body parser object init
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//Pulls mongodb data. If entries are added or moved to completed.
    //replace the document in mongodb
var MongoClient = require('mongodb').MongoClient;
var passwd = "XpwinXP83PDjr29E";

var url = "mongodb+srv://blueberrycola:"+ passwd + "@bulletjournalapp.kbpps.mongodb.net/<dbname>?retryWrites=true&w=majority";
var entries = [];
var idString = "";
//Completed tasks will have a green checkmark replaced instead of a dot
var complete = [];
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db");
    var query = { _id: "chasejohnston" };
    dbo.collection("entry_collection").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result[0]);
        idString = result[0]._id;
        entries = result[0].task;
        complete = result[0].complete;
        db.close();
    });
});




//post route for adding entry
app.post('/addtask', function (req, res) {
    var newEntry = req.body.newtask;
    entries.push(newEntry);
    res.redirect("/");
});
//complete a task
    //FIXME: once a task is completed add a green check mark to it on the right hand side
app.post("/completetask", function(req, res) {
    var task = req.body.check;
    if(typeof task === "string") {
        complete.push(task);
        entries.splice((task), 1);
    } else if(typeof task === "object") {
        for(var i = 0; i < task.length; i++) {
            complete.push(task[i]);
            entries.splice((task), 1);
        }
    }
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
