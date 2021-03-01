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
					title: document.getElementById('todo-input').value
				})
			})
			.then(resp => console.log(resp))
			.catch(err => console.log(err))
    })
})
