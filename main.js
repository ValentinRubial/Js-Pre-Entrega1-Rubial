// Calcular el Area de un Triangulo

const AreaTriangulo = (base, altura) => {
   if (base <= 0 || altura <= 0) {
      return "ERROR. La base y la altura deben ser mayores que cero.";
   }
   return (base * altura) / 2;
};
let baseTriangulo = 0;
let alturaTriangulo = 5;
let areaTriangulo = AreaTriangulo(baseTriangulo, alturaTriangulo);
console.log("El área es: " + areaTriangulo);

// Todas las Operaciones de un numero que el usuario elija.

// const numeros = (num1, num2) => {
//    while (isNaN(num1) || isNaN(num2)) {
//       alert("Estos numeros no son válidos. Por favor, ingrese números válidos.");
//       num1 = parseInt(prompt("Ingrese el primer número nuevamente:"));
//       num2 = parseInt(prompt("Ingrese el segundo número nuevamente:"));
//    }
//    let suma = num1 + num2;
//    let resta = num1 - num2;
//    let multiplicacion = num1 * num2;
//    let division = num1 / num2;
//    alert(`Suma: ${suma}\nResta: ${resta}\nMultiplicación: ${multiplicacion}\nDivisión: ${division}`);
// };
// let num1 = parseInt(prompt("Ingrese el primer número:"));
// let num2 = parseInt(prompt("Ingrese el segundo número:"));
// numeros(numBase, numOperacion);

