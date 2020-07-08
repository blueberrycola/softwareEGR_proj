// All pagess endpoints in this file
module.exports = function(app){
	//Schema for user object
	const mongoose = require('mongoose');
	const user = mongoose.Schema({
		_id: mongoose.Types.ObjectId,
		name: String
	});
	
	
	
	// Get all users
	app.get('/users/', (req, res) => {
			const db = req.app.locals.db;
			const collection = db.collection('users');
			collection.find().toArray(function(err, data){
					console.log(data);
					res.send(data);
					});
			});
	// Get a specific user      5ed03eef3e623af0d588cc26
	
	app.get('/users/:id', function (req, res) {
		let id = req.params["id"];
		const db = req.app.locals.db;
		console.log(req.body);
		id = req.params["id"];
		const collection = db.collection('users');
		collection.find({ _id : ObjectId(id)}).toArray(function(err, data){
			console.log(data);
			res.send(data);
		});
	});
	app.put('/users/:id', function (req, res) {
		res.send('put request to the homepage')
		console.log(req.body);
		res.status(200).send("200 - Successful")
	})
	app.post('/users/:id', function (req, res) {
		res.send('post request to the homepage')
	})
	app.delete('/users/:id', function (req, res) {
		res.send('delete request to the homepage')
	})
	
};

