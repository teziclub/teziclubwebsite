// Contact us Form Submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbx63XS2pyclwV9qFmPf0MYeQ9wocTgUiLgqt9H7mm6Uc_1xe2RJqlk3TnmWnezmgyPJ/exec';
const form = document.forms['website-newsletter-signup'];

form.addEventListener('submit', e => {
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
alert("Thank You for signing up!")
})

// https://github.com/jamiewilson/form-to-google-sheets
