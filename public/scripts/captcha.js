// Generar la operación matemática al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
  const mathProblemElement = document.querySelector('.math-problem');
  const captchaInput = document.querySelector('#captcha');

  if (mathProblemElement && captchaInput) {
      // Genera dos números aleatorios entre 1 y 10
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;

      // Muestra el problema matemático
      mathProblemElement.textContent = `${num1} + ${num2}`;

      // Guarda el resultado como atributo de datos en el input
      captchaInput.setAttribute('data-answer', num1 + num2);
  }
});

// Validación al enviar el formulario
document.querySelector('.formulario-extendido').addEventListener('submit', function (event) {
  const captchaInput = document.querySelector('#captcha');
  const userAnswer = parseInt(captchaInput.value, 10); // Convertir la entrada del usuario a un número
  const correctAnswer = parseInt(captchaInput.getAttribute('data-answer'), 10);

  if (userAnswer !== correctAnswer) {
      event.preventDefault(); // Evita que el formulario se envíe
      alert('La respuesta del CAPTCHA es incorrecta. Intenta de nuevo.');
  }
});
