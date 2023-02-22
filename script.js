// 1er paso: Seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const guessField = document.querySelector('.guess');
const highScoreField = document.querySelector('.highscore');
const messageField = document.querySelector('.message');
const numberField = document.querySelector('.number');
const bodyField = document.querySelector('body');

// 2do paso: Crear las variables que necesitamos
let score = 20;
let highscore = 0;

//Obtener un número aleatorio entre 1 y 20
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
//También se puede hacer:
//const secretNumber = Number.parseInt(Math.random() * 20);

console.log(`El número secreto es ${secretNumber}`);

// 3er paso: capturar el checkButton y agregarle un evento y mostrar
// un mensaje que diga si el número es mayor o menor en el campo
// mesaggeField

checkButton.addEventListener('click', fnCheckButton);

function mostrarMensaje(mensaje) {
  messageField.textContent = mensaje;
}

function fnCheckButton() {
  // Aunque guessField sea un input de tipo number, su valor es un string
  const number = Number(guessField.value);
  if (number === secretNumber) {
    mostrarMensaje(`¡Ganaste! El número secreto era ${secretNumber}`);
    //La siguiente línea asigna de derecha a izquierda
    if (score > highscore) highscore = highScoreField.textContent = score;
    numberField.textContent = secretNumber;
    bodyField.style.backgroundColor = 'green';
  } else if (score === 1) {
    mostrarMensaje('¡Perdiste!');
    scoreField.textContent = 0;
    bodyField.style.backgroundColor = 'red';
  } else {
    const mensaje =
      number < secretNumber
        ? 'El número secreto es mayor'
        : 'El número secreto es menor';
    mostrarMensaje(mensaje);
    score--;
    scoreField.textContent = score;
  }
}
