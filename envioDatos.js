document.getElementById('formulario.register').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const tipoDocumento = document.getElementById('tipoDocumento').value;
  const documentNumber = document.getElementById('documentNumber').value;
  const email = document.getElementById('email').value;
  const contrasena = document.getElementById('contrasena').value;


  // Crear un objeto con los datos del formulario
  const formData = {
    nombre: nombre,
    apellido: apellido,
    tipoDocumento:tipoDocumento,
    documentNumber:documentNumber,
    email: email,
    contrasena: contrasena,
  };


document.getElementById('formulario.register').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const tipoDocumento = document.getElementById('tipoDocumento').value;
    const documentNumber = document.getElementById('documentNumber').value;
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('contrasena').value;
  
  
    // Crear un objeto con los datos del formulario
    const formData = {
      nombre: nombre,
      apellido: apellido,
      tipoDocumento:tipoDocumento,
      documentNumber:documentNumber,
      email: email,
      contrasena: contrasena,
    };
  
    // Enviar los datos al back-end 
    enviarDatosAlBackend(formData);
  });
  
  function enviarDatosAlBackend(formData) {
    fetch('recepcionDatos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        
        console.log(data);
        alert('Datos enviados correctamente');
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
        alert('Ocurrió un error al enviar los datos');
      });
  }
  