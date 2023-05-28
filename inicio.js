// Obtener referencias a los botones de inicio de sesión y registro
var loginButton = document.getElementById("loginButton");
var signupButton = document.getElementById("signupButton");

// Agregar eventos de clic a los botones
loginButton.addEventListener("click", function() {
    // Redirigir a la página de inicio de sesión
    window.location.href = "login.html";
});

signupButton.addEventListener("click", function() {
    // Redirigir a la página de registro
    window.location.href = "signup.html";
});