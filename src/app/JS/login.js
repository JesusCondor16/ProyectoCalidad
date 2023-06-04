// Obtener referencias a los elementos del formulario
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("loginButton");

// Agregar evento de envío de formulario
loginButton.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Validar los campos del formulario
    if (validateForm()) {
        // Realizar la lógica de inicio de sesión aquí
        // ...
        // Redirigir al usuario a otra página después del inicio de sesión exitoso
        window.location.href = "dashboard.html";
    }
});

// Función para validar los campos del formulario
function validateForm() {
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();

    // Validar que los campos no estén vacíos
    if (email === "" || password === "") {
        Swal.fire("Error", "Por favor, complete todos los campos.", "error");
        return false;
    }

    // Realizar otras validaciones si es necesario

    return true;
}