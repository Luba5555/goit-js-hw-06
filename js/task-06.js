const validationInput = document.querySelector("#validation-input");
const inputLength = Number(validationInput.dataset.length);

validationInput.addEventListener('blur', onValidationInputBlur);
validationInput.addEventListener('focus', onValidationInputFocus);

function onValidationInputBlur(event) {
    if (event.currentTarget.value.length !== inputLength) {
        validationInput.classList.add('invalid');
        } else {
        validationInput.classList.add('valid');
    }
}

function onValidationInputFocus() {
    validationInput.classList.remove('invalid');
    validationInput.classList.remove('valid');
  }