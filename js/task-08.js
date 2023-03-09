const form = document.querySelector('.login-form');
const onFormSubmit = event => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email === '' || password === '') {
        alert('Всі поля повинні бути заповнені');
        return;
    }
    const formData = {
        email,
        password,
    };
    console.log(formData);
    form.reset();
};
form.addEventListener('submit', onFormSubmit);
