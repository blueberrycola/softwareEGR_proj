//  Require the built in 'assertion' library
var index = require('./index');
var request = require('supertest');
const { expect } = require('chai');
var assert = require('assert');
var MongoClient = require('mongodb');

//Testing mongodb function

describe('MongoDB', function() {
   it('testing mongodb connection function', function(){
    var passwd = "XpwinXP83PDjr29E";
    
    var url = "mongodb+srv://blueberrycola:"+ passwd + "@bulletjournalapp.kbpps.mongodb.net/<dbname>?retryWrites=true&w=majority";
    var idString = "";
    var entries = [];
    var complete = [];
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("db");
        var query = { _id: "chasejohnston", passwd: "honeycrispApple42" };
        dbo.collection("entry_collection").find(query).toArray(function(err, result) {
            idString = result[0]._id;
            
            entries = result[0].task;
            complete = result[0].complete;
            assert(idString == "chasejohnston")
            assert(entries[0] == "implement mongosync()")            
            db.close();
        });
    });            
});
        
});
//Checks if the homepage contains the main title for the application
describe("homepage", function() {
    it("welcomes the user", function() {
        request(index).get("/")
        .expect("/The BuJo/")
    })
})
//Tests if an error is thrown when a null login form in submitted
describe("error handling for null login",function() {
    it("throws err", function() {
        request(index).get("/loadentries?user=&passwd=")
        .expect("/error/")
    })
})
//Tests if you login with the right username but wrong password
describe("error handling for wrong password",function() {
    it("entries should be null if the password is wrong", function() {
        request(index).get("/loadentries?user=chasejohnston&passwd=a")
        .expect(index.entries == null)
        .expect(index.idString == null)
    })
})

