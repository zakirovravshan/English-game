// index html Login page
const form = document.getElementById('form');
const elBtn = document.getElementById('btn');

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

// Home html home page

const elEasyBtn = document.querySelector('.easy-btn');
const elMediumBtn = document.querySelector('.medium-btn');
const elHardBtn = document.querySelector('.hard-btn');

// Home html home page
