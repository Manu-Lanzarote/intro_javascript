// 1.	Escribe un programa que pregunte al usuario su edad. Mostrar en pantalla “Feliz cumpleaños” repetido tantas veces como años tenga.

// let edad = parseInt(prompt("Dime tu edad"));

// for (let i = 0; i < edad; i++) {
//   console.log("Feliz cumpleaños");
// }

// 2.	Crear un programa que muestre el valor de sumar todos los números desde 1 hasta el número que introduzca el usuario. Por ejemplo si introduce el 8 debería mostrar 36 (1 + 2+ 3+ 4+ 5+ 6+ 7+ 8).

// let numUser = parseInt(prompt("Introduce un número"));

// let aux = 0;
// for (let i = 1; i <= numUser; i++) {
//   aux = aux + i;
// }
// console.log(aux);

// 3.	Mostrar en pantalla los números del 10 al 20 (incluidos los dos) con una línea vacía entre ellos.

// for (let i = 10; i < 21; i++) {
//   console.log(i);
//   console.log(" ");
// }

//4.	Escribe un programa que pida 10 valores. Al final mostrar la media de esos valores.

// let aux = 0;
// let valor = 0;

// for (let i = 0; i < 10; i++) {
//   valor = parseInt(prompt("Introduce un valor"));
//   aux = aux + valor;
// }
// let media = aux / 10;
// console.log(media);

// 5.	Escribe un programa que muestre el resultado de sumar todos los números del 1 hasta el número introducido y que vuelva a pedirle al usuario otro número hasta que el usuario introduzca un 0.

// let num = 0;
// let aux = 0;

// do {
//   num = parseInt(prompt("Introduce un número"));
//   aux = aux + num;
// } while (num !== 0);
// console.log(aux);

// 6.	Un número factorial es el resultado de multiplicar todos los números de 1 a ese mismo número (por ejemplo el factorial de 4 es 1 x 2 x 3 x 4 = 24). Haz un programa que muestre los números del 1 al 10 en una columna con el resultado de su factorial en la columna de al lado.

// let aux = 1;

// for (let i = 1; i <= 10; i++) {
//   console.log("El factorial de " + i + " es: " + (aux = aux * i));
// }

// 7.	Escribe un programa que pida valores. Si introduce un valor negativo, mostrar un mensaje diciendo que se ignoran los valores negativos.Seguir pidiendo hasta que el usuario introduzca un 0, entonces mostrar la suma de los valores introducidos.

let valor = parseInt(prompt("Introduce un valor"));

if (valor < 0) {
  console.log("Se ignoran los valores negativos");
}
