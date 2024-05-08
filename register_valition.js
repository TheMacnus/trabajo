document.addEventListener('DOMContentLoaded', function () {
    const cedulaInput = document.getElementById('cedula'); // Campo de entrada para la cédula
    const nombreInput = document.getElementById('nombre_completo'); // Campo de entrada para el nombre completo
    const fechaInput = document.getElementById('fecha_nacimiento'); // Campo de entrada para la fecha de nacimiento
    const direccionInput = document.getElementById('direccion'); // Campo de entrada para la dirección
    const telefonoInput = document.getElementById('telefono'); // Campo de entrada para el teléfono
    const usuarioInput = document.getElementById('edtuser'); // Campo de entrada para el usuario
    const passwordInput = document.getElementById('edtpassword'); // Campo de entrada para la contraseña
    const registerButton = document.getElementById('btnregister'); // Botón de registro

    // Función para verificar si todos los campos tienen datos
    function checkFormValidity() {
        const cedula = cedulaInput.value.trim();
        const nombre = nombreInput.value.trim();
        const fecha = fechaInput.value.trim();
        const direccion = direccionInput.value.trim();
        const telefono = telefonoInput.value.trim();
        const usuario = usuarioInput.value.trim();
        const password = passwordInput.value.trim();

        // Verificar si algún campo está vacío
        if (!cedula || !nombre || !fecha || !direccion || !telefono || !usuario || !password) {
            registerButton.disabled = true; // Deshabilitar botón de registro
            alert('Por favor, complete todos los campos.'); // Mostrar mensaje de advertencia
        } else {
            registerButton.disabled = false; // Habilitar botón de registro si todos los campos están llenos
        }
    }

    // Agregar evento de escucha a cada campo de entrada
    cedulaInput.addEventListener('input', checkFormValidity);
    nombreInput.addEventListener('input', checkFormValidity);
    fechaInput.addEventListener('input', checkFormValidity);
    direccionInput.addEventListener('input', checkFormValidity);
    telefonoInput.addEventListener('input', checkFormValidity);
    usuarioInput.addEventListener('input', checkFormValidity);
    passwordInput.addEventListener('input', checkFormValidity);
});
