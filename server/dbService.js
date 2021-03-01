// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();

// const CONNECTION_URL = process.env.MONGODB_URI;
// // alternatively, if using local MDB Compass:
// // const localMongoDB = 'mongodb://localhost:27017/toDoApp'; // FIX THIS!

// class dbService {
//   CONNECTION_URL = process.env.MONGODB_URI;
//   // localMongoDB = 'mongodb://localhost:27017/toDoApp'; // FIX THIS!

//   constructor(db) {
//     this.db = db;
//   }
// }

// const db = mongoose.connection;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// db.on('connected', function () {
//   console.log('Mongoose default connection open');
// });

// // If the connection throws an error
// db.on('error', function (err) {
//   console.log('Mongoose default connection error: ' + err);
// });

// // When the connection is disconnected
// db.on('disconnected', function () {
//   console.log('Mongoose default connection disconnected');
// });

// const Schema = mongoose.Schema;

// const toDoSchema = new Schema({
//   id: Number,
//   todo: String,
//   date_added: Date
// })

// const ToDo = mongoose.model('ToDo', toDoSchema);  // Naming the collection automatically as here 'ToDo' and using defined schema for it

// // const newToDo = new ToDo({
// //   id: 1,
// //   todo: 'Buy vitamins',
// //   date_added: new Date
// // })

// // newToDo.save().then(() => console.log('Saved new todo in MongoDB'))