const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('fpassword');
const password2= document.getElementById('password2');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
}



// Event listener
form.addEventListener('submit', function(e) {
  e.preventDefault();

  if(username.value === '') {
    showError(username, 'Username is required')
  } else {
    showSuccess(username);
  }
  console.log(username.value);
});