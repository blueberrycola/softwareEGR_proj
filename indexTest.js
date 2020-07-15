// Require the built in 'assertion' library
var assert = require('assert');
var MongoClient = require('mongodb');

describe('MongoDB', function() {
        // Test One: Retrieves mongodb document
       it('id should be chasejohnston', function(){
        var passwd = "XpwinXP83PDjr29E";
        
        var url = "mongodb+srv://blueberrycola:"+ passwd + "@bulletjournalapp.kbpps.mongodb.net/<dbname>?retryWrites=true&w=majority";
        var idString = "";
        var entries = [];
        var complete = [];
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("db");
            var query = { _id: "chasejohnston" };
            dbo.collection("entry_collection").find(query).toArray(function(err, result) {
                //if (err) throw err;
                idString = result[0]._id;
                
                entries = result[0].task;
                complete = result[0].complete;
                
                console.log('test');
               
            
                db.close();
                assert.equal(result[0].id, 'chasejohnston');
            });
            

            

        });
       
                
    });
            
});




//Test post task

//Test post complete

//Test get

//Test listen