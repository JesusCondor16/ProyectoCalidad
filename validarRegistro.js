function validarFormulario(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    var nombres = document.getElementById('names').value;
    var apellidos = document.getElementById('lastNames').value;
    var tipoDocumento = document.getElementById('documentType').value;
    var dni = document.getElementById('documentNumber').value;
    var correo = document.getElementById('email').value;
    var contrasena = document.getElementById('password').value;

    if (nombres === '' || apellidos === '' || tipoDocumento === '' || dni === '' || correo === '' || contrasena === '') {
        alert('Por favor, llenar todos los campos.');
    } else {
        alert('Registro completado!');
    }
}
