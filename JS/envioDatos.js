/*Envio datos al back end del formulario ingresar*/

document.getElementById('formulario_ingresar').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const correo_electronico = document.getElementById('correo_electronico').value;
  const contrasena = document.getElementById('contrasena').value;

  // Crear un objeto con los datos del formulario
  const formData1 = {
    correo_electronico,
    contrasena: contrasena,
  };

/*Envio dato al back end del formulario registrar*/ 
document.getElementById('formulario_register').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono= document.getElementById('telefono').value;
    const correo_electronico = document.getElementById('correo_electronico').value;
    const contrasena = document.getElementById('contrasena').value;
  
  
    // Crear un objeto con los datos del formulario
    const formData = {
      nombre: nombre,
      apellido: apellido,
      telefono:telefono,
      correo_electronico: correo_electronico,
      contrasena: contrasena,
    };
  
    // Enviar los datos al back-end 
    enviarDatosRegistro(formData);
    enviarDatosIngresar(formData1);
  });
  /*Para enviar para el formulario registrar*/
  function enviarDatosRegistro(formData) {
    fetch('recepcionDatosRegistro', {
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

  /*Para el formulario ingresar*/
  function enviarDatosIngresar(formData1) {
    fetch('recepcionDatosIngresar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData1)
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
})