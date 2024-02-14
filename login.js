document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
       
        window.location.href = "student_dashboard.html";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const forgotPasswordLink = document.querySelector('.forgot-password a');

    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        window.location.href = "forgot_password.html";
    });
});

