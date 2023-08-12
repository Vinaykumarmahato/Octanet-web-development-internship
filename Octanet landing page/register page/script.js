document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically send the data to a backend server using AJAX or fetch.
        // The server would then handle sending the email.
        // This part involves server-side programming which is not covered in this example.
    });
});
