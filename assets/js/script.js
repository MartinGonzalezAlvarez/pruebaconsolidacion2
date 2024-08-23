// Selecciona el formulario y el botón de envío
const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

// Añade un evento de escucha para cuando el formulario se envíe
form.addEventListener('submit', function(event) {
      // Previene el comportamiento por defecto del formulario
    event.preventDefault();

      // Cambia el texto del botón a "Enviando..."
    submitButton.textContent = "Enviando...";

      // Simula el envío del formulario (aquí podrías integrar con un backend real)
    setTimeout(() => {
          // Cambia el texto del botón a "¡Mensaje Enviado!"
        submitButton.textContent = "¡Mensaje Enviado!";

          // Aquí podrías reiniciar el formulario si fuera necesario
          // form.reset();
    }, 2000);
});
