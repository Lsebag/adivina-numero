// ## Debug

// Hablamos   de debug sobre la manera de inspeccionar nuestro código para corregir los errores o bugs.
// El siguiente código sirve para calcular la temperatura en grados Kelvin a partir de grados centígrados. Ejecuta el siguiente código y verás que se produce un error:

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Introduce los grados Celsius')),
  };
  console.log('measurement', measurement);
  const kelvin = measurement.value + 273;
  console.log('kelvin', typeof kelvin);
  console.log(5, typeof 5);
  return kelvin;
};
console.log('Voy a ejecutar la función');
const valorRetorno = measureKelvin();
console.log('Función efecutada');
console.log(
  `La función se ejecutó y el valor de retorno es de ${valorRetorno}`
);

const primerParrafo = document.querySelector('p');
console.log(primerParrafo);
const parrafoImportante = document.querySelector('#importante');

primerParrafo.style.color = 'red';
parrafoImportante.style.color = 'blue';
parrafoImportante.style.fontSize = '3rem';
parrafoImportante.style.backgroundColor = 'yellow';
parrafoImportante.style.display = 'inline';
parrafoImportante.textContent = 'Este párrafo es super importante';
