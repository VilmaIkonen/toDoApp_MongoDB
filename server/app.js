const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

// const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

const CONNECTION_URL = process.env.MONGODB_URI;
// const LOCAL_MDB = process.env.LOCAL_MDB;

const db = mongoose.connection;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

db.on('connected', function () {
  console.log('Mongoose default connection open');
});

// If the connection throws an error
db.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
db.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
  todo: String,
  date_added: Date
})

const ToDo = mongoose.model('ToDo', toDoSchema);  // Naming the collection automatically as here 'ToDo' and using defined schema for it

app.get('/', (req, res) => {
	res.send('hello world')
})

app.post('/insert', (req, res) => {
const newToDo = new ToDo({
		todo: req.body.todo,
		date_added: new Date()
	});

	newToDo.save().then(() => console.log('Successfully saved a new tod to MongoDB'))
	res.send('Received todo')
})

app.get('/getAll', (req, res) => {
	ToDo.find({}, (err, todos) => {
		if (err) console.log(err)
		else res.json(todos)
	})
})

app.listen(5000, () => {
	console.log('Listening on port', 5000)
})
