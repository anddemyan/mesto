
function submitForm(evt) {
  evt.preventDefault();
}

function showError(input, errorContainer, {inputErrorClass, errorVisibleClass}) {
  input.classList.add(inputErrorClass);
  errorContainer.classList.add(errorVisibleClass);
  errorContainer.textContent = input.validationMessage;
}

function hideError(input, errorContainer, {inputErrorClass, errorVisibleClass}) {
  input.classList.remove(inputErrorClass);
  errorContainer.classList.remove(errorVisibleClass);
  errorContainer.textContent = '';
}

function toggleButton(form, {submitButtonSelector, inactiveButtonClass}) {
  const button = form.querySelector(submitButtonSelector);
  const isFormValid = form.checkValidity();

  if (isFormValid) {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled');
  } else {
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', 'true');
  }
}

function validateInput(form, input, classes) {
  const errorContainer = form.querySelector(`#error-${input.id}`);

  if (input.validity.valid) {
    hideError(input, errorContainer, classes);
  } else {
    showError(input, errorContainer, classes);
  }
  toggleButton(form, classes);
}

function enableValidation({ formSelector, inputSelector, ...rest }) {
  const forms = document.querySelectorAll(formSelector);
  forms.forEach(form => {
    form.addEventListener('submit', submitForm);
    const inputs = form.querySelectorAll(inputSelector);
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        validateInput(form, input, rest);
      });
    })
    toggleButton(form, rest);
  })
}


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  errorSelector: '.error-message',
  inputErrorClass: 'popup__field_type_error',
  errorVisibleClass: 'error-message_visible',
  inactiveButtonClass: 'popup__form-save_disabled',
  submitButtonSelector: '.popup__form-save'
})