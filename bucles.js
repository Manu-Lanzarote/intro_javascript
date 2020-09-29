// 1.	Escribe un programa que pregunte al usuario su edad. Mostrar en pantalla “Feliz cumpleaños” repetido tantas veces como años tenga.

// let edad = parseInt(prompt("Dime tu edad"));

// for (let i = 0; i < edad; i++) {
//   console.log("Feliz cumpleaños");
// }

//
// 2.	Crear un programa que muestre el valor de sumar todos los números desde 1 hasta el número que introduzca el usuario. Por ejemplo si introduce el 8 debería mostrar 36 (1 + 2+ 3+ 4+ 5+ 6+ 7+ 8).

// let numUser = parseInt(prompt("Introduce un número"));

// let aux = 0;
// for (let i = 1; i <= numUser; i++) {
//   aux = aux + i;
// }
// console.log(aux);

//
// 3.	Mostrar en pantalla los números del 10 al 20 (incluidos los dos) con una línea vacía entre ellos.

// for (let i = 10; i < 21; i++) {
//   console.log(i);
//   console.log(" ");
// }

//
//4.	Escribe un programa que pida 10 valores. Al final mostrar la media de esos valores.

// let aux = 0;
// let valor = 0;

// for (let i = 0; i < 10; i++) {
//   valor = parseInt(prompt("Introduce un valor"));
//   aux = aux + valor;
// }
// let media = aux / 10;
// console.log(media);

//
// 5.	Escribe un programa que muestre el resultado de sumar todos los números del 1 hasta el número introducido y que vuelva a pedirle al usuario otro número hasta que el usuario introduzca un 0.

// let num = 0;
// let aux = 0;

// do {
//   num = parseInt(prompt("Introduce un número"));
//   aux = aux + num;
// } while (num !== 0);
// console.log(aux);

//
// 6.	Un número factorial es el resultado de multiplicar todos los números de 1 a ese mismo número (por ejemplo el factorial de 4 es 1 x 2 x 3 x 4 = 24). Haz un programa que muestre los números del 1 al 10 en una columna con el resultado de su factorial en la columna de al lado.

// let aux = 1;

// for (let i = 1; i <= 10; i++) {
//   console.log("El factorial de " + i + " es: " + (aux = aux * i));
// }

//
// 7.	Escribe un programa que pida valores. Si introduce un valor negativo, mostrar un mensaje diciendo que se ignoran los valores negativos.Seguir pidiendo hasta que el usuario introduzca un 0, entonces mostrar la suma de los valores introducidos.

// let valor = 0;
// let sumaValores = 0;
// do {
//   valor = parseInt(prompt("Introduce un valor"));
//   if (valor < 0) {
//     window.alert("Se ignoran los valores negativos.");
//   } else {
//     sumaValores = sumaValores + valor;
//   }
// } while (valor !== 0);
// console.log(`La suma de los valores es ${sumaValores}`);

//
// 8.	Escribe un programa que muestre todos los valores pares o impares entre 1 y 100 dependiendo de si el usuario introduce P o I . Si introduce otra cosa, decir que ese valor no es correcto y pedirle otra vez.

// let valor = prompt("¿Qué prefieres? ¿Pares (P) ó impares (I)?").toUpperCase;

// if (valor === "P") {
//   for (let i = 2; i <= 100; i = i + 2) {
//     console.log(i);
//   }
// } else if (valor === "I") {
//   for (let j = 1; j <= 100; j = j + 2) {
//     console.log(j);
//   }
// } else {
//   console.log("La selección no es correcta");
// }

//
// 9.	Escribe un programa que muestre los números de 1 a 12 en una columna. En la columna de al lado de los números impares mostrar el cuadrado de ese valor y en la de los pares mostrar el cubo.

// for (let i = 1; i < 13; i++) {
//   if (i % 2 !== 0) {
//     console.log(`El cuadrado de ${i} es ${i * i}`);
//   }
//   else{
//     console.log(`El cubo de ${i} es ${i * i * i}`);
//   }
// }

//
// 10.	Realiza un programa que muestre por pantalla los números del 1 al 100 sin mostrar aquellos números múltiplos de 5.
// for (let i = 1; i < 101; i++) {
//   if (i % 5 !== 0) {
//     console.log(i);
//   }
// }

//
// TODO11.	Escribe un programa que muestre el número entero positivo que el usuario introduzca pero al revés (si introduce 1478 que muestre 8741), hasta que el usuario introduzca 0. Si introduce 0 la primera vez, debería mostrarlo al revés (es decir, mostrar 0) y acabar el programa.

//
// 12.	Escribe un programa que pida un número de 3 dígitos y muestre el resultado de sumar sus dígitos.
// let numm3dig = prompt("Introduce un número de tres dígitos");

// // obtengo cada dígito y lo paso a number
// let dig1 = parseInt(numm3dig.substring(0, 1));
// let dig2 = parseInt(numm3dig.substring(1, 2));
// let dig3 = parseInt(numm3dig.substring(2, 3));

// // Sumo los 3 dígitos
// let resultado = dig1 + dig2 + dig3;
// console.log(`El resultado de sumar ${dig1}+${dig2}+${dig3} es ${resultado}`);

//
// 13.	Se desea conocer el lucky  number (número de la suerte) de cualquier persona. El número de la suerte se consigue reduciendo la fecha de nacimiento a un número de un solo dígito. Por ejemplo, la fecha de nacimiento de Emma es la siguiente: 16-08-1973 16+8+1973=1997 	1+9+9+7=26 	2+6=8. El número de la suerte de Emma será el 8.
// let fechaDeNac = prompt("Introduce tu fecha de nacimiento dd-mm-aaaa");
// console.log(`Tu fecha de nacimiento es: ${fechaDeNac}`);

// // Obtengo los primeros valores y los sumo
// let dia = parseInt(fechaDeNac.slice(0, 2));
// let mes = parseInt(fechaDeNac.slice(3, 5));
// let anyo = parseInt(fechaDeNac.slice(6, 10));

// let resul1 = (dia + mes + anyo).toString();
// console.log(`Sumamos dd+mm+yyyy y obtenemos: ${resul1}`);

// // De la suma de los valores anteriores obtendremos un resultado de 4 cifras, (p.ej: 01-01-1990= "1992") con las que podremos trabajar de igual manera que antes.
// let cifra1 = parseInt(resul1.slice(0, 1));
// let cifra2 = parseInt(resul1.slice(1, 2));
// let cifra3 = parseInt(resul1.slice(2, 3));
// let cifra4 = parseInt(resul1.slice(3, 4));

// let resul2 = (cifra1 + cifra2 + cifra3 + cifra4).toString();
// console.log(
//   `Y de la suma de ${cifra1}+${cifra2}+${cifra3}+${cifra4} obtenemos: ${resul2} `
// );

// let final1 = 0;
// let final2 = 0;
// // En este punto obtendremos un valor de una o dos cifras.
// final1 = parseInt(resul2.slice(0, 1));
// console.log(`La primera cifra de ${resul2} es ` + final1);
// final2 = parseInt(resul2.slice(1, 2));
// console.log(`Y la segunda es ` + final2);

// // Si el resultado de la suma de ambos valores resulta NaN el resultado es 'final1', si no, el resultado es la suma de los valores'
// let lucky = final1 + final2;

// if (isNaN(lucky)) {
//   console.log(
//     `Así que si sumamos ${final1} + ${final2} tu número de la suerte es ${final1}`
//   );
// } else {
//   console.log(
//     `Así que si sumamos ${final1} + ${final2} tu número de la suerte es ${lucky}`
//   );
// }

//
// 14.	Pedir al usuario un número. Mostrar en pantalla el dibujo de abajo con tantas líneas como las que haya introducido:

// let introNum = parseInt(prompt("Introduce un número"));
// let aux = "*";
// console.log(aux);
// for (let i = 1; i <= introNum; i++) {
//   aux = aux + "*";
//   console.log(aux);
// }

//
// 15.	Escribe un programa el cual analizará si la contraseña introducida es correcta o no. Para que la contraseña sea correcta deberá cumplir estas directivas:
// Debe tener 8 caracteres como mínimo.
// La contraseña deberá contener números. (buscar una función)
// La primera letra tiene que ser en mayúsculas.(buscar una función)

// let contrasenya = prompt("Introduce la contraseña");
// let largo = false;
// let mayuscula = false;
// let numeros = false;

// // Mayor o igual a 8 caracteres
// if (contrasenya.length >= 8) {
//   largo = true;
// }

// // Mayúscula
// if (contrasenya.charCodeAt(0) > 64 && contrasenya.charCodeAt(0) < 91) {
//   mayuscula = true;
// }

// // Contiene números
// let aux;
// for (let i = 0; i < contrasenya.length; i++) {
//   aux = contrasenya.charCodeAt(i);
//   if (aux > 47 && aux < 58) {
//     numeros = true;
//     break;
//   }
// }

// // Confirmar si la contraseña es correcta
// if (largo === true && mayuscula === true && numeros === true) {
//   alert("Bienvenid@");
// } else {
//   alert("Contraseña no válida :(");
// }
