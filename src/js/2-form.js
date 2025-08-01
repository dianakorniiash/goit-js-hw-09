let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('input[name="email"]');
const messageInputEl = document.querySelector('textarea[name="message"]');


const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  emailInputEl.value = formData.email || '';
  messageInputEl.value = formData.message || '';
}


form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);


function handleInput(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function handleSubmit(e) {
  e.preventDefault();

  if (emailInputEl.value.trim() === '' || messageInputEl.value.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  console.log(formData); 


  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData = { email: '', message: '' };
}
