let email = {},
    password = {},
    signInButton;

const isValidEmailAddress = function(emailAddress)
 {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function(password)
{
    if(password.length > 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}
const getDOMElements = function(){
    email.errorMessage = document.querySelector('.js-email-error-message');
    email.input = document.querySelector('.js-email-input');
    email.field = document.querySelector('.js-email-field');

    password.errorMessage = document.querySelector('.js-password-error-message');
    password.input = document.querySelector('.js-password-input');
    password.field = document.querySelector('.js-password-field');

    signInButton = document.querySelector('.js-sign-in-button');
}

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };

const addErrors = function(field)
{
    field.classList.add('has-error');
}

const doubleCheckEmail = function()
{
    if(isValidEmailAddress(email.input.value))
    {
        removeErrors(email.field);
    }
    else
    {
        if(isEmpty(email.input.value))
        {
            email.errorMessage.innerHTML = 'The field is required';
        }
        else
        {
            email.errorMessage.innerHTML = 'The email is not valid';
        }
    }
}

const doubleCheckPassword = function()
{
    if(isValidPassword(password.input.value))
    {
        removeErrors(password.field);
    }
    else
    {
        if(isEmpty(password.input.value))
        {
            password.errorMessage.innerHTML = 'The field is required';
        }
    }
}

const removeErrors = function(field)
{
    field.classList.remove('has-error');
}

const enableInteraction = function()
{
    //1 blur listener aan email veld hangen
    email.input.addEventListener('blur', function(event)
    {
        const typedInput = event.target.value;
        if(!isValidEmailAddress(typedInput))
        {
            addErrors(email.field);
            email.input.removeEventListener('input', doubleCheckEmail);

            if(isEmpty(typedInput))
            {
                email.errorMessage.innerHTML = 'The field is required';
            }
            else{
                email.errorMessage.innerHTML = 'The email is not valid';
            }

            email.input.addEventListener('input', doubleCheckEmail);
        }
        //todo, zoek de value van het huidige element
    });
    //2 blur listener aan password veld hangen
    password.input.addEventListener('blur', function(event)
    {
        const typedInput = event.target.value;
        if(!isValidPassword(typedInput))
        {
            addErrors(password.field);
            password.input.removeEventListener('input', doubleCheckPassword);

            if(isEmpty(typedInput))
            {
                password.errorMessage.innerHTML = 'The field is required';
            }

            password.input.addEventListener('input', doubleCheckPassword);
        }
    })
    //3 click event aan button hangen

}   

const listenToSendButton = function()
{
    signInButton.addEventListener('click', function(event)
    {
        event.preventDefault();
        if(isValidEmailAddress(email.input.value) && isValidPassword(password.input.value))
        {
            console.log(email.input.value);
            console.log(password.input.value);
        }
    });
}

document.addEventListener('DOMContentLoaded', function(){
    getDOMElements();
    listenToSendButton();
    enableInteraction();
    console.log('good to go!')
});