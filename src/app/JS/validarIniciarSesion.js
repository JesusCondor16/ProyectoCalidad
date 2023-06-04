document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Verificar si algún campo está vacío
    if (email === '' || password === '') {
      alert('Por favor completar todos los datos');
      return; // Detener la ejecución si falta algún dato
    }
  
    // Aquí puedes realizar las validaciones y la lógica de inicio de sesión en el servidor
  
    // Ejemplo: Verificar si las credenciales son correctas
    const credentialsCorrectas = true; // Coloca aquí tu lógica para verificar las credenciales
  
    if (credentialsCorrectas) {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Inicio de sesión fallido');
    }
  });
