
const form = document.getElementById('form');


form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
  
    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
    localStorage.setItem('age', age);
  
    form.reset();
  
    alert('Data saved successfully!');

    location.href = "home.html"
  });