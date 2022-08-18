// import throttle from 'lodash.throttle';

// const formRef = document.querySelector('.feedback-form');

// const emailRef = document.querySelector('input[name="email"]');

// const messageRef = document.querySelector('textarea[name="message"]');

// const dataBase = {
//     email: '',
//     message: '',
// }


// function validateForm(e){
//     const { name, value } = e.target;
//     dataBase[name] = value;
//     localStorage.setItem('feedback-form-state', JSON.stringify(dataBase));
// }


// function submitForm (e){
//     e.preventDefault();
//     e.currentTarget.reset();
//     console.log(dataBase);
// }


// function getDataBase(){
// const getData = localStorage.getItem('feedback-form-state');
// const parsedData = JSON.parse(getData);
// if (parsedData) {
//     emailRef.value = parsedData.email;
//     messageRef.value = parsedData.message;
// }}

// formRef.addEventListener('submit', submitForm);

// formRef.addEventListener('input', throttle(validateForm, 500));

// getDataBase();


import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();