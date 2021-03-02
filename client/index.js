// Sending user input to MongoDB:
document.addEventListener('DOMContentLoaded', () => {
	const backend = 'http://localhost:5000/insert';

	document.querySelector('[type="submit"]').addEventListener('click', (event) => {
	event.preventDefault();
	fetch(backend, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			todo: document.getElementById('todo-input').value
		})
	})
	.then(resp => console.log(resp))
	.catch(err => console.log(err))
	})
})

// Getting data from MongoDB:
document.querySelector('#getAll').addEventListener('click',  () => {
	fetch('http://localhost:5000/getAll')
	.then(response => response.json())
	.then(todos => loadData(todos));    
});

const loadData = (todos) => {
	const table = document.querySelector('table tbody');

	let tableHtml = "";

	todos.forEach(({todo, date_added}) => {
		tableHtml += "<tr>";
		tableHtml += `<td>${todo}</td>`;
		tableHtml += `<td>${new Date(date_added).toLocaleDateString('en-GB')}</td>`;
		tableHtml += "</tr>";
	});

	table.innerHTML = tableHtml;
}

