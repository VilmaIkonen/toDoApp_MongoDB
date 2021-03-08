const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const CONNECTION_URL = process.env.MONGODB_URI;

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
  id: Number,
  todo: String,
  date_added: Date
})

const ToDo = mongoose.model('ToDo', toDoSchema);  // Naming the collection automatically as here 'ToDo' and using defined schema for it

module.exports = {ToDo}