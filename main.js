// Load the express library
const express = require('express')
// Create an instance of an express app
const app = express();
// Run on this port (stay over 1024 to avoid the need for admin privileges)
const port = 8081;
// Load the database library
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;


const MongoClient = require('mongodb').MongoClient;
// You can get this connection information from the "Connect" button
// in the mongodb web interface.  Replace my uri below!
const uri = "mongodb+srv://blueberrycola:XpwinXP83PDjr29E@bulletjournalapp.kbpps.mongodb.net/<dbname>?retryWrites=true&w=majority";

// Create a variable to hold our db connection
let connection = new MongoClient(uri);

// Tell the app to use the builtin JSON parser
app.use(express.json());
// Tell the app to decode urls for us (so we can pass
// values in the URL such as "users/1")
app.use(express.urlencoded({ extended: true }))

// Load in the pages module
require('./pages.js')(app);
