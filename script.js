// 1er paso: Seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score');
const checkButton = document.querySelector('.check');
scoreField.textContent = 10;

//const secretNumber = Math.trunc(Math.random() * 20) + 1;

// function alerta() {
//   alert('Me hiciste click');
// }

checkButton.addEventListener('click', function alerta() {
  alert('Hola mundo');
});

// againButton.addEventListener('click', function reiniciar() {});
