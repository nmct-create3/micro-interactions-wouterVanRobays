let email = {},
    password = {},
    signInButton;

const getDOMElements = function(){
    email.errorMessage = document.querySelector('.js-email-error-message');
    email.input = document.querySelector('.js-email-input');
    email.field = document.querySelector('.js-email-field');

    password.errorMessage = document.querySelector('.js-password-error-message');
    password.input = document.querySelector('.js-password-input');
    password.field = document.querySelector('.js-password-field');

    signInButton = document.querySelector('.js-sign-in-button');

    console.log(email.errorMessage);
    console.log(email.input);
    console.log(email.field);
    console.log(password.errorMessage);
    console.log(password.field);
    console.log(password.input);
   
}

document.addEventListener('DOMContentLoaded', function(){
    getDOMElements();
    console.log('good to go!')
});