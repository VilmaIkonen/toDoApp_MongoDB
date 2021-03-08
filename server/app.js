const express = require('express');
const app = express();
const cors = require('cors');

const {ToDo} = require('./dbService')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// ROUTES:
app.get('/', (req, res) => {
	res.send('hello world')
})

app.post('/insert', (req, res) => {
	const newToDo = new ToDo({
		id: req.body.id,
		todo: req.body.todo,
		date_added: new Date()
	});

	newToDo.save().then(() => console.log('Successfully saved a new todo to MongoDB'))
	res.send('Received todo')
})

app.get('/getAll', (req, res) => {
	ToDo.find({}, (err, todos) => {
		if (err) console.log(err)
		else res.json(todos)
	})
});

app.listen(process.env.PORT, () => console.log(`app is running in port ${process.env.PORT}`));
