const formEl = document.querySelector('.feedback-form');
const emailInputEl = formEl.querySelector('.email');
const messageInputEl = formEl.querySelector('.message');

let formData = { email: '', message: '' };

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  try {
    formData = JSON.parse(savedData);
    emailInputEl.value = formData.email || '';
    messageInputEl.value = formData.message || '';
  } catch (error) {
    console.error('Помилка при читанні з localStorage:', error);
  }
}

formEl.addEventListener('input', handleInput);
formEl.addEventListener('submit', handleSubmit);


function handleInput(event) {
  const { name, value } = event.target;
  formData[name] = value; 
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function handleSubmit(event) {
  event.preventDefault();

  const email = emailInputEl.value.trim();
  const message = messageInputEl.value.trim();

  if (email === '' || message === '') {
    alert('Всі поля мають бути заповнені!');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  formEl.reset();
}
