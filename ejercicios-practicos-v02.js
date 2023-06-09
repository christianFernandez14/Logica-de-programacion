function tablaDeMultiplicar(number) {
  // - Funcion con un parametro "número"
  // - Variable con texto encabezado
  // - Bucle del 1 al 10
  // - Concatenar a la vaiable un string con multiplicacion y s resultado.

  // Tu codigo aqui:
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    let multiplicacion = number * i;
    resultado += `${number} X ${i} = ${multiplicacion} `;
  }
  return resultado;

  // Readme: Dado un número, delvolver su tabla de multiplicar completa.
}

function palindromo(texto) {
  // - Función con parametro "texto"
  // - Separar el texto en un array de letras.
  // - Darle la vuelta.
  // - Unir el array de letras en un string y comparar con el parametro.

  // Tu oodigo aqui:
  const textoInvertido = texto.split("").reverse().join("");

  return texto === textoInvertido;

  // Readme: Dada una cedena de texto, comprobar si es un número polidromo o no. Los polidromos son palabras que se leen igual aun estando invertido por ejemplo: ana, bob, otto, allivessevilla.
}

function coincidencia(frase, busqueda) {
  // - Funcion con dos parametros "frase" y "busqueda"
  // - Poner string en minusculas y limpiarlo.
  // - Comprobr si la busqueda esta incluida en la frase.
  // - Crear un array de palabras de la frase.
  // - Mapear esas palabras y hacer un contador de cadad una.
  // - Devolver el contador de la busqueda.

  // tu codigo aqui:
  let cantidadOcurrencia = 0;
  const arrayFrases = frase
    .toLowerCase()
    .replace(/[;,.!"'¡]/gi, "")
    .split(" ");
  const palabraLimpia = busqueda.toLowerCase().replace(/[ ,.!"'¡]/gi, "");

  arrayFrases.forEach((palabra) => {
    palabra === palabraLimpia ? cantidadOcurrencia++ : cantidadOcurrencia;
  });

  return cantidadOcurrencia;

  // Readme: Dada una palabra, buscarla en una frase y devolver cuantas veces aparace. La frase y la palabra deben ser parametros de la función.
}

function invertir(string) {
  // - Funcion con parametro "string";
  // - Crear una variable, para guardar la variable invertida;
  // - Bucle que recorra el string y guarde los caracteres en la variable.

  // Tu codigo aqui:

  let stringInvertido = "";

  for (let letra of string) {
    stringInvertido = letra + stringInvertido;
  }

  return stringInvertido;

  // Readme: Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, si usar metodos propios del lenguaje, con solo estructuras de control.
}

function tantoPorCiento(porcentaje, numero) {
  // - Function con parametros "porcentaje" y "número"
  // - Crear una variable para la operacion del porcentaje
  // - Devolver el string que responda a la pregunta del enunciado.

  // Tu codigo:

  return numero * (porcentaje / 100);

  // Readme:  Cuantos es el X por ciento de X número?
}

function contarImpares(num1, num2) {
  // - Funcion que reciba dos números
  // - Bucle del número 1 al número 2
  // - Condición, si el resto es distinto a cero es impar
  // - Aumentar en 1 el contador
  // - Devolver contador.

  // tu codigo aqui:

  let cantidadImpares = 0;

  while (num1 < num2) {
    if (num1 % 2 === 0) cantidadImpares++;
    num1++;
  }

  return cantidadImpares;

  // Readme: Dados dos números, devolver cuantos números impares hay entre ellos
}

function invertirNumeros (numero) {

// - Funcion que reciba un número 
// - Convertir el número en string
// - Crear un array por cada letra
// - Darle la vuelta
// - Unir el array en un string
// - Convertir el string en un enstero

// Tu codigo aqui:

const numeroInvertido = numero.toString()
                              .split('')
                              .reverse()
                              .join('');


return parseInt(numeroInvertido) * Math.sign(numero);

// Readme: Dado un número entero, inviertelo y devuelve el número entero
}

function elementosComunes(array1, array2) {
    const procesando = array1.filter(elemento => array2.includes(elemento))

    return procesando
}


// **** No tocar de aca en adelante
module.exports = {
  tablaDeMultiplicar,
  palindromo,
  coincidencia,
  invertir,
  tantoPorCiento,
  contarImpares,
  invertirNumeros,
  elementosComunes
};
