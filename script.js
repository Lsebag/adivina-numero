// 1er paso: Seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const guessField = document.querySelector('.guess');
const highScoreField = document.querySelector('.highscore');
const messageField = document.querySelector('.message');
const numberField = document.querySelector('.number');

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

checkButton.addEventListener('click', function () {
  const number = guessField.value;
  if (number < secretNumber) {
    messageField.textContent = 'El número secreto es mayor';
    score--;
    scoreField.textContent = score;
  } else if (number > secretNumber) {
    messageField.textContent = 'El número secreto es menor';
    score -= 1;
    scoreField.textContent = score;
  } else if (number == secretNumber) {
    messageField.textContent = `¡Ganaste! El número secreto era ${secretNumber}`;
  }
});
