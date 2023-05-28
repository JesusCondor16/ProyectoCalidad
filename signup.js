document.addEventListener('DOMContentLoaded', function() {
    var registerButton = document.getElementById('registerButton');

    registerButton.addEventListener('click', function(e) {
      e.preventDefault();

      var names = document.getElementById('names').value;
      var lastNames = document.getElementById('lastNames').value;
      var documentType = document.getElementById('documentType').value;
      var documentNumber = document.getElementById('documentNumber').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      // Validación de campos
      if (!names || !lastNames || !documentType || !documentNumber || !email || !password){
        Swal.fire('Error', 'Por favor, complete todos los campos', 'error');
        return;
      }

      // Realizar el registro (puedes agregar tu lógica aquí)

      // Redireccionar a la página de inicio después del registro exitoso
      window.location.href = 'Inicio.html';
    });
  });
