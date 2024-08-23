//  se carga el contenido del DOM
document.addEventListener('DOMContentLoaded', function() {
//Elementos del formulario
    const form = document.getElementById('formulario');
    const nombreInput = document.querySelector('input[name="nombre"]');
    const emailInput = document.querySelector('input[name="email"]');
    const
mensajeTextarea = document.querySelector('textarea[name="mensaje"]');
    const submitButton = form.querySelector('button[type="submit"]'); // Obtén el botón de envío
// Agregamos un event listener para el evento 'submit' del formulario
    form.addEventListener('submit', function(event) {
    event.preventDefault();

      // Validación básica
    if (nombreInput.value.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }
    if (emailInput.value.trim() === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return;
    }
    if (mensajeTextarea.value.trim() === '') {
        alert('Por favor, ingresa un mensaje.');
        return;
    }
      // Si todo está bien, mostrar mensaje de éxito y bloquear el formulario
    alert('¡Formulario enviado con éxito!');
    form.reset(); 
      submitButton.disabled = true; // Deshabilita el botón de envío
    });
});