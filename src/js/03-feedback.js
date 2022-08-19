import throttle from 'lodash.throttle';
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form')

// прослуховуємо форму та submit
formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onInputForm, 500));

// додаємо у сховище
function onInputForm() {
  const formData = new FormData(formRef);
  let userForm = {};
  formData.forEach((value, name) => (userForm[name] = value.trim()));
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userForm));
}

// беремо зі сховища
initForm()
function initForm() {
  let persistedForm = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (persistedForm) {
    persistedForm = JSON.parse(persistedForm);
    Object.entries(persistedForm).forEach(([name, value]) => {
      formRef.elements[name].value = value;
    });
  }
}

// отримання данних в консолі
function onFormSubmit(evt) {
    evt.preventDefault();
    const inputName = formRef.email.value;
    const inputMessage = formRef.message.value;
    if (inputName && inputMessage !== '') {
        let userForm = localStorage.getItem(LOCAL_STORAGE_KEY);
        userForm = JSON.parse(userForm);
        console.log('Відправляємо форму з такими даними', userForm);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        evt.currentTarget.reset();
        return;
    }
     alert('Всі поля повинні бути заповнені');
  return;
}