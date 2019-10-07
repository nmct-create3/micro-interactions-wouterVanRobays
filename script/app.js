let domPasswordInput, domPasswordToggle;
const listenToToggle = function()
{
    domPasswordToggle.addEventListener('change', function()
    {
        if(this.checked)
        {
            domPasswordInput.type = 'text';
        }
        else
        {
            domPasswordInput.type = 'password';
        }
    });
}

const getDomElements = function()
{
    domPasswordInput = document.querySelector('.c-input--password-with-toggle');
    domPasswordToggle = document.querySelector('.js-password-toggle');
}
const init = function()
{
    getDomElements();
    listenToToggle();
}
document.addEventListener('DOMContentLoaded', init);