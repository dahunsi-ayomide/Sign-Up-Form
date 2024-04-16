document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    if(!/^[A-Za-z]+$/.test(lastName)) {
        alert('Last name should only contain letters.');
        return;
    }


       if(firstName.length < 3) {
        alert('First name must be at least 3 characters long.');
        return;
    }

    if(lastName.length < 3) {
        alert('Last name must be at least 3 characters long.');
        return;
    }

    if(password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    let formData = {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'password': password
    };
  
    localStorage.setItem('formData', JSON.stringify(formData));

    alert('Your information has been saved.');

    document.getElementById('signup-form').reset();
});
