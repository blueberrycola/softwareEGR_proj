//  Initialize web app and express package
var express = require('express');
var router = express.Router();
var app = express();
var passcheck = "";
//  body parser object init
var bodyParser = require('body-parser');
const { Router } = require('express');
app.use(bodyParser.urlencoded({ extended: true }));
//Vars that are pulled from the server
let entries = [];
let complete = [];
let idString = "";
// Vars used to connect mongodb server
let MongoClient = require('mongodb').MongoClient;

let url = 'mongodb+srv://blueberrycola:' + passwd + '@bulletjournalapp.kbpps.mongodb.net/<dbname>?retryWrites=true&w=majority';
//Vars used to save the state of the user that is logged in
let jUser = "";
let jPass = "";

//Function responsible for saving local data entered by user into mongo database
function mongosync_append(newtask) {
    //Connect to db
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db('db')
        //Append newtask to task array for the user
        dbo.collection('entry_collection').update(
            {_id: jUser},
            { $push: {task: newtask}},   
        )
        db.close();
        })   

}


// route for adding entry by taking the form string value and adding it to the entries
app.post('/addtask', function (req, res) {
    var newEntry = req.body.newtask;
    entries.push(newEntry);
    //Trigger mongosync function so the database is updated with its new task
    mongosync_append(newEntry);
    res.redirect('/');
});
//  complete a task
//  FIXME: once a task is completed add a green check mark to it on the right hand side
app.post('/completetask', function(req, res) {
    var task = req.body.check;
    if(typeof task === 'string') {
        complete.push(task);
        entries.splice((task), 1);
    } else if(typeof task === 'object') {
        for(var i = 0; i < task.length; i++) {
            complete.push(task[i]);
            entries.splice((task), 1);
        }
    }
    res.redirect('/');
    
})

//  render the ejs and display added task, 
//  entries(index.ejs) = entries(array);
app.get('/', function(req, res) {
    res.render('index', {idString: idString, entries: entries, complete: complete});
})

app.post('/loadpages', function(req, res) {

})

app.get('/loadentries', function(req, res) {
    

    //Error handling for null login info
    if(req.query["user"] == null) {
        throw error("username is blank");
    } 
    
    if(req.query["passwd"] == null) {
        throw error("username is blank")
    }
    


    MongoClient.connect(url, function(err, db) {
        
        if (err) throw err;
        var dbo = db.db('db')
        //Save state of who logged in for future mongoclient access
        jUser = req.query["user"];
        jPass = req.query["passwd"];
        var query = { _id: jUser, passwd: jPass };
        dbo.collection('entry_collection').find(query).toArray(function(err, result) {
            passcheck = result[0].passwd;
            if (err) throw err;
            //display json
            //console.log(result[0]);
            idString = result[0]._id;
            entries = result[0].task;
            complete = result[0].complete;
            db.close();
            
        });        
    })
    //Throw error that no login info found
    if(entries == null && complete == null) {
        throw error("no user found");
    }
    //Clear information if jPass is incorrect
    if(passcheck != jPass) {
        
        entries = [];
        complete = []
        idString = null;
        throw error("Incorrect password");
    }
    
    res.render('index', {idString: idString, entries: entries, complete: complete});
})



app.listen(8080, function() {
    console.log('open localhost:8000 on chrome to see app');
})



app.set('view engine', 'ejs');

module.exports = router;
