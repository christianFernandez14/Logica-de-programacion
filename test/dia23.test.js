const {
  tablaDeMultiplicar,
  palindromo,
  coincidencia,
  invertir,
  tantoPorCiento,
  contarImpares,
  invertirNumeros,
  elementosComunes,
} = require("../ejercicios-practicos-v02");

describe("EJERCICIOS PRACTICOS V.02", () => {
  describe("tablaDeMultiplicar(number)", () => {
    it("Función que retorna la tabla de multiplicación del número que se le pasa por parametro", () => {
      // define el número para el que se espera obtener la tabla de multiplicación
      const number = 2;

      // define la salida esperada para ese número.
      const salidaEsperada = `2 X 1 = 2 2 X 2 = 4 2 X 3 = 6 2 X 4 = 8 2 X 5 = 10 2 X 6 = 12 2 X 7 = 14 2 X 8 = 16 2 X 9 = 18 2 X 10 = 20 `;

      // Llamas a la función que quieres porbar
      const resultado = tablaDeMultiplicar(number);

      // Verifica si el resultado obtenido coincide con la salida esperada
      expect(resultado).toEqual(salidaEsperada);
    });
  });

  describe("palindromo(texto)", () => {
    it("Función que devuelve true si el parametros es un palindromo", () => {
      // Verifica si el resultado obtenido coincide con la salida esperada
      expect(palindromo("ana")).toEqual(true);
      expect(palindromo("canada")).toEqual(false);
    });
  });

  describe("coincidencia(frase, busqueda)", () => {
    it("Función que devuelve cantidad de ocurrencia de una palbra en una frase, ambos parametros se le pasa a la función", () => {
      // Verifica si el resultado obtenido coincide con la salida esperada
      expect(
        coincidencia("hola, como estas; PODEMOS HOLA vernos; HoLa!!", "HOLA!!")
      ).toEqual(3);
    });
  });

  describe("inverir(texto)", () => {
    it("Funcion que recibe una string e invierte sus caraceres", () => {
      // Verifica si el resultado obetenido coincide con la salida esperada.
      expect(invertir("hola")).toEqual("aloh");
    });
  });

  describe("tantoPorCiento(porcentaje, numero)", () => {
    it("Función recibe como parametro un número y el porcentaje sacar a evaluar de ese número", () => {
      // Verifica si el resultado obetenido coincide con la salida esperada.
      expect(tantoPorCiento(10, 100)).toBe(10);
    });
  });

  describe("contarImpares(num1, num2)", () => {
    it("Función que recibe dos números y va ha devolver cuantos números impares hay entre ellos", () => {
      // Verifica si el resultado obetenido coincide con la salida esperada.
      expect(contarImpares(1, 10)).toEqual(4);
    });
  });

  describe("invertirNumeros(numero)", () => {
    it("Función que recibe número entero, lo invierte y devuelve el número entero", () => {
      // Verifica si el resultado obetenido coincide con la salida esperada.
      expect(invertirNumeros(45)).toEqual(54);
      expect(invertirNumeros(-598)).toEqual(-895);
    });
  });

  describe("elementosComunes(array1, array2)", () => {
    it("Función que recibe dos arrays, y devulve un array con los elementos comunes entre ambos", () => {
      // Verifica si el resultado obetenido coincide con la salida esperada.
      expect(elementosComunes(['a',1,2,3,'b'], ['array2','a',1,7,8])).toEqual(['a',1]);
    });
  });
});
