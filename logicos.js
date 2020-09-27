// 1.	El usuario tiene dos hijos. Pregúntale la edad del mayor y los años de diferencia entre el mayor y el menor. Muestra en pantalla si el menor es mayor de edad o no.
// let edadMayor = parseInt(prompt("¿Qué edad tiene tu hijo mayor?"));
// let diferenciaEdad = parseInt(
//   prompt("¿Qué diferencia de edad hay entre tu hijo mayor y tu hijo menor?")
// );

// let resultado = edadMayor - diferenciaEdad;

// if (resultado >= 18) {
//   console.log("Tu hijo menor es mayor de edad");
// } else {
//   console.log("Tu hijo menor es menor de edad");
// }

//
// 2.	Escribe un programa que evalúe si un string contiene la letra ‘r’ (pista:usar función de string).

// let frase = "Atletico de Madrid";
// let buscaLetra = frase.indexOf("r");

// // Busco la posición de r con indexOf. Si no estuviera la consola me devolvería -1
// if (buscaLetra === -1) {
//   console.log(`La frase ${frase} no contiene la letra 'r'`);
// } else {
//   console.log(`La frase ${frase} contiene la letra 'r'`);
// }

//
// 3.	A partir de un valor de número entero, mostrar el valor absoluto. Por ejemplo si se introduce un -7 mostrar el mensaje "El valor absoluto de -7 es 7". Si es positivo o cero mostrar ese mismo valor.

// let introValor = parseInt(prompt("Introduce un número"));

// let valorAbsoluto = Math.abs(introValor);
// console.log(`El valor absoluto de ${introValor} es ${valorAbsoluto}`);

//
// 4.	Escribe un programa el cual analizará si la contraseña introducida es correcta o no. Para que la contraseña sea correcta deberá cumplir estas directivas:
//	Debe tener 8 caracteres como mínimo.

// let introContrasenya = prompt("Introcuce contraseña");
// let tamanyo = introContrasenya.length;
// console.log(tamanyo);

// if (tamanyo < 8) {
//   console.log("La contraseña debe tener al menos 8 dígitos");
// } else {
//   console.log("Contraseña correcta");
// }

//
// 5.	Haz uno de los ejercicios de condicionales sencillos usando un condicional ternario. P.Ej:	Pide por teclado la edad del usuario. Si la edad es igual o inferior a 8 mostramos el mensaje "Pasa al tobogán", si no mostramos "Eres demasiado mayor para usar el tobogán".

// let edad = parseInt(prompt("Introduce tu edad"));

// edad <= 8
//   ? console.log("Pasa al tobogán")
//   : console.log("Eres demasiado mayor para usar el tobogán");

//
// 6.	 Haz el ejercicio 23 utilizando un condicional ternario:  En una clase tienes tres exámenes, con un valor de 5 puntos máximo en cada uno. La nota final es la mejor nota de los dos primeros exámenes más la nota del tercer examen. Crea un programa que con tres notas calcula el resultado de nota final con los siguientes rangos:
//                 10 es matrícula
//                 9 y hasta 10 es sobresaliente
//                 7 y hasta 9 es notable
//                 6 y hasta 7 es bien
//                 5 y hasta 6 es suficiente
//                 0 hasta 5 es suspenso

// let examen1 = 5;
// let examen2 = 3;
// let examen3 = 5;

// // Comparo las dos primeras notas con un operador ternario
// let mayor = examen1 >= examen2 ? true : false;

// // Obtengo la nota final
// let nota = 0;
// if ((mayor = true)) {
//   nota = examen1 + examen3;
// } else {
//   nota = examen2 + examen3;
// }

// //Imprimo el resultado
// switch (nota) {
//   case 10:
//     console.log("Matrícula");
//     break;
//   case 9:
//     console.log("Sobresaliente");
//     break;
//   case 8:
//     console.log("Notable");
//     break;
//   case 7:
//     console.log("Notable");
//     break;
//   case 6:
//     console.log("Bien");
//     break;
//   case 5:
//     console.log("Suficiente");
//     break;
//   default:
//     console.log("Suspenso");
// }
