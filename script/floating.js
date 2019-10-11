const handleFloatingLabel = function()
{
    const floatingInput = document.querySelector('.js-name-input'),
        floatingLabel = document.querySelector('.js-name-label');
    
    //todo 1 check of iets ingevuld is bij blur-event
    floatingInput.addEventListener('blur', function(event)
    {
        const typedInput = event.target.value;
        if(!isEmpty(typedInput))
        {
            floatingLabel.classList.add('is-floating');
        }
        if(isEmpty(typedInput))
        {
            floatingLabel.classList.remove('is-floating');
        }
    });
}

document.addEventListener('DOMContentLoaded', function()
{
    console.log('floating loaded');
    handleFloatingLabel();
});