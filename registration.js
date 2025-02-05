document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const repeatPasswordInput = document.getElementById('repeatPassword');

    form.addEventListener('submit', function (e) {
        let valid = true;

        // Clear previous error messages
        clearErrors();

        // Validate Name
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Full name is required.");
            valid = false;
        }

        // Validate Email
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Please enter a valid email.");
            valid = false;
        }

        // Validate Password
        if (passwordInput.value.length < 8) {
            showError(passwordInput, "Password must be at least 8 characters.");
            valid = false;
        }

        // Validate Repeat Password
        if (repeatPasswordInput.value !== passwordInput.value) {
            showError(repeatPasswordInput, "Passwords do not match.");
            valid = false;
        }

        // If the form is not valid, prevent submission
        if (!valid) {
            e.preventDefault();
        }
    });

    // Helper function to validate email format
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Function to show error message
    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerText = message;
        input.parentElement.appendChild(errorDiv);
        input.classList.add('error-input');
    }

    // Function to clear previous errors
    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());
        const inputs = document.querySelectorAll('.error-input');
        inputs.forEach(input => input.classList.remove('error-input'));
    }
});
