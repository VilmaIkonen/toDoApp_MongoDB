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
	.then(data => loadHTMLTable(data['data']));    
});

// function loadHTMLTable(data) {
// 	const table = document.querySelector('table tbody');

// 	if (data.length === 0) {
// 			table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
// 			return;
// 	}

// 	let tableHtml = "";

// 	data.forEach(function ({todo, date_added}) {
// 			tableHtml += "<tr>";
// 			tableHtml += `<td>${todo}</td>`;
// 			tableHtml += `<td>${new Date(date_added).toLocaleDateString('en-GB')}</td>`;
// 			tableHtml += "</tr>";
// 	});

// 	table.innerHTML = tableHtml;
// }

