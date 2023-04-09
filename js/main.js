// index html Login page
const form = document.getElementById('form');
const elBtn = document.getElementById('btn');
const  userName = localStorage.getItem("name");
const  userSurname = localStorage.getItem("surname");
document.getElementById("userName").textContent = userName + " " + userSurname ;

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const surname = document.getElementById('surname').value;
	const age = document.getElementById('age').value;

	localStorage.setItem('name', name);
	localStorage.setItem('surname', surname);
	localStorage.setItem('age', age);

	form.reset();
	if ((name, surname, age)) {
		location.href = 'home.html';
	} else {
		alert('toldir malumotlani ');
	}
});



// index html Login page
