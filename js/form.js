const inputName = document.querySelectorAll('.connect-form__input')[0];
const inputNameInfo = document.querySelector('.connect-form__input-info--name');
const inputEmail = document.querySelectorAll('.connect-form__input')[1];
const inputEmailInfo = document.querySelector(
  '.connect-form__input-info--email'
);
const inputMessage = document.querySelector('.connect-form__message');
const inputMessageInfo = document.querySelector(
  '.connect-form__input-info--message'
);
const button = document.querySelector('.connect-form__button');

button.addEventListener('click', () => {
  button.disabled = true;
  if (
    inputName.value === '' &&
    inputEmail.value === '' &&
    inputMessage.value === ''
  ) {
    inputNameInfo.classList.remove('hidden');
    inputEmailInfo.classList.remove('hidden');
    inputMessageInfo.classList.remove('hidden');
    inputName.classList.add('connect-form__input--empty');
    inputEmail.classList.add('connect-form__input--empty');
    inputMessage.classList.add('connect-form__input--empty');
  } else if (
    inputName.value !== '' &&
    inputEmail.value === '' &&
    inputMessage.value === ''
  ) {
    inputEmailInfo.classList.remove('hidden');
    inputMessageInfo.classList.remove('hidden');
    inputEmail.classList.add('connect-form__input--empty');
    inputMessage.classList.add('connect-form__input--empty');
  } else if (
    inputName.value === '' &&
    inputEmail.value !== '' &&
    inputMessage.value === ''
  ) {
    inputNameInfo.classList.remove('hidden');
    inputMessageInfo.classList.remove('hidden');
    inputName.classList.add('connect-form__input--empty');
    inputMessage.classList.add('connect-form__input--empty');
  } else if (
    inputName.value === '' &&
    inputEmail.value === '' &&
    inputMessage.value !== ''
  ) {
    inputNameInfo.classList.remove('hidden');
    inputEmailInfo.classList.remove('hidden');
    inputName.classList.add('connect-form__input--empty');
    inputEmail.classList.add('connect-form__input--empty');
  } else if (
    inputName.value === '' &&
    inputEmail.value !== '' &&
    inputMessage.value !== ''
  ) {
    inputNameInfo.classList.remove('hidden');
    inputName.classList.add('connect-form__input--empty');
  } else if (
    inputName.value !== '' &&
    inputEmail.value === '' &&
    inputMessage.value !== ''
  ) {
    inputEmailInfo.classList.remove('hidden');
    inputEmail.classList.add('connect-form__input--empty');
  } else if (
    inputName.value !== '' &&
    inputEmail.value !== '' &&
    inputMessage.value === ''
  ) {
    inputMessageInfo.classList.remove('hidden');
    inputMessage.classList.add('connect-form__input--empty');
  } else {
    button.disabled = false;
  }
});

inputName.addEventListener('focus', () => {
  inputNameInfo.classList.add('hidden');
  inputName.classList.remove('connect-form__input--empty');
  button.disabled = false;
});
inputEmail.addEventListener('focus', () => {
  inputEmailInfo.classList.add('hidden');
  inputEmail.classList.remove('connect-form__input--empty');
  button.disabled = false;
});
inputMessage.addEventListener('focus', () => {
  inputMessageInfo.classList.add('hidden');
  inputMessage.classList.remove('connect-form__input--empty');
  button.disabled = false;
});
