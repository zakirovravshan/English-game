// Home html home page

const elEasyBtn = document.querySelector('.easy-btn');
const elMediumBtn = document.querySelector('.medium-btn');
const elHardBtn = document.querySelector('.hard-btn');
document.getElementById("userName").textContent = userName + " " + userSurname ;

const logOut = document.getElementById('logout');

logOut.addEventListener('click', function () {
	localStorage.removeItem('name');
	localStorage.removeItem('surname');
	localStorage.removeItem('age');

	location.href = "index.html"
});

elEasyBtn.addEventListener('click', function () {
	location.href = 'game.html';
});

elMediumBtn.addEventListener('click', function () {
	location.href = 'game.html';
});

elHardBtn.addEventListener('click', function () {
	location.href = 'game.html';
});

// Home html home page
