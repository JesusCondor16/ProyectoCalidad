
<script src="RegistrarComprador.html"></script>
document.getElementById('formulario.register').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombres = document.getElementById('nombresInput').value;
    const apellidos = document.getElementById('apellidosInput').value;
    const tipoDocumento = document.getElementById('tipoDocumentoInput').value;
    const documentNumber = document.getElementById('documentNumberInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    fetch('/RegistrarComprador', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Inicio de sesión exitoso');
        // Realizar acciones adicionales para redireccionar o mostrar contenido adicional
      } else {
        alert('Inicio de sesión fallido: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
  });
  