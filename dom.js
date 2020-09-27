// 1.- Crea un título y un párrafo en un archivo js y haz que aparezcan en pantalla.

// Tengo que usar comillas francesas para insertar más de un elemento sin machacar el anterior
// document.getElementById("dom").innerHTML = ` <h2>Subtítulo</h2>
// <p>lorem10</p> `;

//
// 2.- Crea una variable con tu nombre. Después haz un párrafo que diga “Hola, me llamo (tu nombre)”.
// let nombre = "Manu";
// document.getElementById("dom").innerHTML = ` <p>Hola, me llamo ${nombre}</p>
// `;

//
//3.- Crea un programa que te pida un nombre y una edad. Si la edad es menor a 18 años mostrar en pantalla “Hola (nombre), eres menor de edad.”. Si es mayor mostrar en pantalla “Hola (nombre), eres mayor de edad.”. Hacedlo con  if, switch y condicional ternario.

// let nombre = prompt("Dime tu nombre");
// let edad = parseInt(prompt("Dime tu edad"));

// // Con condicional ternario
// edad < 18
//   ? console.log(`Hola ${nombre}, eres menor de edad.`)
//   : console.log(`Hola ${nombre}, eres mayor de edad.`);

// // Con switch
// switch (edad < 18) {
//   case true:
//     console.log(`Hola ${nombre}, eres menor de edad.`);
//     break;
//   case false:
//     console.log(`Hola ${nombre}, eres mayor de edad.`);
//     break;
// }
// // Con if/else
// if (edad < 18) {
//   console.log(`Hola ${nombre}, eres menor de edad.`);
// } else {
//   console.log(`Hola ${nombre}, eres mayor de edad.`);
// }

//
// 4.- Lo mismo que en el ejercicio 3. Pero si es menor de edad que el mensaje sea rojo y si es mayor de edad que el mensaje sea verde.

// let nombre = prompt("Dime tu nombre");
// let edad = parseInt(prompt("Dime tu edad"));

// if (edad < 18) {
//   document.getElementById(
//     "dom"
//   ).innerHTML = `Hola ${nombre}, eres menor de edad.`;
//   document.getElementById("dom").style.color = "red";
// } else {
//   document.getElementById(
//     "dom"
//   ).innerHTML = `Hola ${nombre}, eres mayor de edad.`;
//   document.getElementById("dom").style.color = "green";
// }

//
// 5.- Crea un programa que te pida 2 números. Mostrar en pantalla la suma, la resta, la multiplicación, la división y el resto de esos 2 números. Mostrar cada operación con un color y un color de fondo distintos.
// let numero1 = parseInt(prompt("Introduce el número uno"));
// let numero2 = parseInt(prompt("Introduce el número dos"));

// let suma = numero1 + numero2;
// let resta = numero1 - numero2;
// let multi = numero1 * numero2;
// let divi = numero1 / numero2;

// //Inserto el HTML
// document.getElementById("suma").innerHTML = `La suma es ${suma}<br><br>`;
// document.getElementById("resta").innerHTML = `La resta es ${resta}<br><br>`;
// document.getElementById("multi").innerHTML = `La multi es ${multi}<br><br>`;
// document.getElementById("divi").innerHTML = `La divi es ${divi}<br><br>`;

// //Inserto estilos
// document.getElementById("suma").style.color = "red";
// document.getElementById("suma").style.backgroundColor = "#A4E0F9";

// document.getElementById("resta").style.color = "yellow";
// document.getElementById("resta").style.backgroundColor = "#283ac1";

// document.getElementById("multi").style.color = "28c1a5";
// document.getElementById("multi").style.backgroundColor = "#f4131b";

// document.getElementById("divi").style.color = "#f1c1f2";
// document.getElementById("divi").style.backgroundColor = "#9d00a0";

//
// 6.- Crea un programa que te pregunte qué operación deseas realizar (Suma, Resta, Multiplicación, División y Resto). Después te pedirá dos números y aparecerá un botón en la pantalla con el nombre de la operación elegida. Al hacer click en el botón saldrá una alerta con el resultado.
let calculadora = prompt("¿Que operación deseas realizar? (+,-,*,/");
let num1 = parseInt(prompt("Introduce el primer número"));
let num2 = parseInt(prompt("Introduce el segundo número"));

switch (calculadora) {
  case "+":
    document.getElementById("boton").innerHTML = "Suma";
    break;
  case "-":
    document.getElementById("boton").innerHTML = "Resta";
    break;
  case "*":
    document.getElementById("boton").innerHTML = "Multiplica";

    break;
  case "/":
    document.getElementById("boton").innerHTML = "Divide";
    break;
}
