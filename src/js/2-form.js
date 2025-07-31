let formData = { email: '', message: '' };

const formEl = document.querySelector('.feedback-form');

const emailInputEl = document.querySelector('.email');
const messageInputEl = document.querySelector('.message');
formEl.addEventListener('input', handleInput);
formEl.addEventListener('submit', handleSubmit);

const savedData = localStorage.getItem('feedback-form-state');
const parsedData = savedData ? JSON.parse(savedData) : null;
// Checking if there's something inside savedData. If not, I will just set it to null

if (parsedData !== null) {
  formData = parsedData;
  emailInputEl.value = parsedData.email || '';
  messageInputEl.value = parsedData.message || '';
}

// Input handler
function handleInput(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  }
  if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

//Submit handler
function handleSubmit(event) {
  event.preventDefault();
  if (emailInputEl.value === '' || messageInputEl.value === '') {
    alert('Fill out all the fields please');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    event.currentTarget.reset();
  }
}