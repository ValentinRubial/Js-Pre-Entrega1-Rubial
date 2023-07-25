// Calcular el Area de un Triangulo

const calcularAreaTriangulo = (base, altura) => {
   if (base <= 0 || altura <= 0) {
      return "ERROR. La base y la altura deben ser mayores que cero.";
   }
   return (base * altura) / 2;
};

const baseTriangulo = parseFloat(prompt("Ingrese la base del triángulo:"));
const alturaTriangulo = parseFloat(prompt("Ingrese la altura del triángulo:"));

const areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);

console.log("El área del triángulo es: " + areaTriangulo);


// Todas las Operaciones de un numero que el usuario elija.

const performOperations = (numBase, numOperacion) => {
   while (isNaN(numBase) || isNaN(numOperacion)) {
      alert("Los números ingresados no son válidos. Por favor, ingrese números válidos.");
      numBase = parseInt(prompt("Ingrese el primer número nuevamente:"));
      numOperacion = parseInt(prompt("Ingrese el segundo número nuevamente:"));
   }

   let suma = numBase + numOperacion;
   let resta = numBase - numOperacion;
   let multiplicacion = numBase * numOperacion;
   let division = numBase / numOperacion;
   alert(`Suma: ${suma}\nResta: ${resta}\nMultiplicación: ${multiplicacion}\nDivisión: ${division}`);
};

let numBase = parseInt(prompt("Ingrese el primer número:"));
let numOperacion = parseInt(prompt("Ingrese el segundo número:"));

performOperations(numBase, numOperacion);



