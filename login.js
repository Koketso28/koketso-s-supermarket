
// ----------- LOGIN FORM ON HOMEPAGE -----------

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // stop reload

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                alert("⚠️ Please enter both username and password.");
                return;
            }

              if (username !== 'KOKETSO'){
                alert('invalid username')
                return false;
            }

            if (password.length < 6) {
                alert("⚠️ Password must be at least 6 characters.");
                return;
            }
            if(password !== 'morwatshehla'){
                alert('Wrong password')
                return false;
                }
            // If valid
            alert("✅ Welcome, " + username + "! You are logged in.");
            loginForm.reset();

            window.location.href='ORDER FORM.html'

        });

    }

});
