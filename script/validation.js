/* -------------------------------------------------------------------------- */
// Alle interactieve onderdelen voor onze site. We maken van alle inputs een object met zijn eigen eigenschappen.
let email = {
		label: null,
		errorMessage: null,
		field: null
	},
	password = {
		label: null,
		errorMessage: null,
		field: null
	},
	remember = {
		label: null,
		errorMessage: null,
		field: null
	},
	signInButton;
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// Twee standaard functies, nog basic, maar kan je nog uitbreiden.
const isValidEmailAddress = function(emailAddress) {
	// Basis manier om e-mailadres te checken.
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function(password) {
	// Het wachtwoord moet minstens 6 karakters bevatten, verder niks.
	return password.length > 6;
};

const isEmpty = function(fieldValue) {
	return !fieldValue || !fieldValue.length;
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
const doubleCheckEmailAddress = function() {
	if (isValidEmailAddress(email.field.value)) {
		// Stop met dit veld in de gaten te houden; het is in orde.
		email.field.removeEventListener('input', doubleCheckEmailAddress);
		removeErrors(email);
	} else {
		// Stuk herhalende code.
		if (isEmpty(email.field.value)) {
			email.errorMessage.innerText = 'This field is required';
		} else {
			email.errorMessage.innerText = 'Invalid emailaddress';
		}
	}
};

const doubleCheckPassword = function() {
	if (isValidPassword(password.field.value)) {
		// Stop met dit veld in de gaten te houden; het is in orde.
		password.field.removeEventListener('input', doubleCheckPassword);
		removeErrors(password);
	} else {
		// Stuk herhalende code.
		if (isEmpty(password.field.value)) {
			password.errorMessage.innerText = 'This field is required';
		} else {
			password.errorMessage.innerText = 'Invalid password';
		}
	}
};

const addErrors = function(formField) {
	formField.label.classList.add('c-label--error');
	formField.field.classList.add('c-input--error');
	formField.errorMessage.classList.add('is-visible');
};

const removeErrors = function(formField) {
	formField.label.classList.remove('c-label--error');
	formField.field.classList.remove('c-input--error');
	formField.errorMessage.classList.remove('is-visible');
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
const getDOMElements = function() {
	email.label = document.querySelector('.js-email-label');
	email.errorMessage = email.label.querySelector('.js-email-error-message');
	email.field = document.querySelector('.js-email-input');

	password.label = document.querySelector('.js-password-label');
	password.errorMessage = password.label.querySelector(
		'.js-password-error-message'
	);
	password.field = document.querySelector('.js-password-input');

	// Optional
	remember.label = document.querySelector('.js-remember-label');
	remember.errorMessage = null; // Currently not available
	remember.field = document.querySelector('.js-remember-input');

	signInButton = document.querySelector('.js-sign-in-button');

	// Check jezelf; hover over de gelogde DOM elementen in de console.
	console.log(
		'email',
		email,
		'password',
		password,
		'remember',
		remember,
		'button',
		signInButton
	);
};

const enableListeners = function() {
	email.field.addEventListener('blur', function() {
		if (!isValidEmailAddress(email.field.value)) {
			if (isEmpty(email.field.value)) {
				email.errorMessage.innerText = 'This field is required';
			} else {
				email.errorMessage.innerText = 'Invalid emailaddress';
			}

			addErrors(email);

			// Gebruik een named function (doubleCheckPassword), om die er weer af te kunnen halen. Dit vermijd ook het dubbel toevoegen ervan.
			email.field.addEventListener('input', doubleCheckEmailAddress);
		}
	});

	password.field.addEventListener('blur', function() {
		if (!isValidPassword(password.field.value)) {
			if (isEmpty(email.field.value)) {
				email.errorMessage.innerText = 'This field is required';
			} else {
				email.errorMessage.innerText = 'Invalid password';
			}

			addErrors(password);

			// Gebruik een named function (doubleCheckPassword), om die er weer af te kunnen halen. Dit vermijd ook het dubbel toevoegen ervan.
			password.field.addEventListener('input', doubleCheckPassword);
		}
	});

	signInButton.addEventListener('click', function(e) {
		// We gaan de form zelf versturen wanneer nodig.
		e.preventDefault();

		if (
			isValidEmailAddress(email.field.value) &&
			isValidPassword(password.field.value)
		) {
			console.log('Form is good to go!');
		} else {
			// Stuk herhalende code...
			addErrors(password);
			password.field.addEventListener('input', doubleCheckPassword);

			addErrors(email);
			email.field.addEventListener('input', doubleCheckEmailAddress);
		}
	});
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// We kunnen pas iets doen met onze html-content (DOM) als die geladen is.
document.addEventListener('DOMContentLoaded', function() {
	// Ook even testen of ik DoMConteeentLoeaaded goed geschreven heb...
	console.log('DOM loaded 🥳!');

	// We splitsen alles netjes op in verschillende functies.
	// 1. Alle linken leggen naar onze HTML.
	getDOMElements();

	// 2. We voegen listeners toe om te wachten op interactie
	enableListeners();
});
/* -------------------------------------------------------------------------- */
