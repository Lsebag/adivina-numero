// 1er paso: Seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const guessField = document.querySelector('.guess');
const highScoreField = document.querySelector('.highscore');
const messageField = document.querySelector('.message');
const numberField = document.querySelector('.number');

// 2do paso: Crear las variables que necesitamos
const score = 20;
const highscore = 0;

//Obtener un número aleatorio entre 1 y 20
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
//También se puede hacer:
//const secretNumber = Number.parseInt(Math.random() * 20);

const number = guessField.value;

console.log(`El número secreto es ${secretNumber}`);
console.log(`El número ingresado es ${number}`);
