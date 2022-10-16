//  https://www.youtube.com/playlist?list=PLYOJU3c8foCBA4244OpgdUAlMF14fEN7J



// VARIABLES 6/102

// let nombre = "Angel";


// console.log(nombre)

// // let nombre = "Boni";

// let edad = 67;
// edad = 68;

// console.log(edad);

// let tieneCoche = false;

// console.log(tieneCoche);

// OPERADORES

// Operadores aritmeticos

// let a = 5;
// let b = 10;
// let c = a + b;

// console.log(a, b, c);

// c = 50;
// c = c + 20;
// c += 20;
// c += 1;
// c++;
// c -= 10;
// c *= 2;
// c /= 5;
// c = 3;
// c **= 4
// c = 3;
// c = c ** 4;
// c = 2;
// let d = 3;
// c += d;
// c *= d;
// c **= d;
// c /= d;

// console.log(c);

// Operadores lógicos 5/102

// let a =2;
// let b = 4
// console.log(a >> b);
// console.log(a << b);
// console.log(a / b);
// console.log(a & b);

// operadores de comparacion 6/102

// let nombre01 = "juan";
// let nombre02 = "Pedro";

// console.log(nombre01 == nombre02);
// // -> false
// console.log(nombre01 === nombre02);
// // -> false
// console.log(nombre01 != nombre02);
// // -> true
// console.log(nombre01 !== nombre02);
// // -> true

// let edad01 = 10;
// let edad02 = 10;

// console.log(edad01 < edad02, edad01 > edad02, edad01 >= edad02)
// // -> false false true

// edad01 = 15;
// let peso = "15";

// console.log(edad01 == peso, edad01 === peso);
// // -> true false

// console.log(edad01 + peso);
// // -> 1515 (concatena, no suma)

// console.log([] == 0);
// // true
// console.log(1 === true);
// // -> false
// console.log('0' === 0);
// // false
// console.log('0' == 0);
// // true

// CONDICIONALES IF 9/102

// let edad = 20;

// if (edad >= 18) {
//   console.log("Eres mayor de edad")
// }

////

// edad = 15;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// }
// else {
  
//   console.error("Aun no eres mayor de edad")
// }

////

// edad = 24;

// if (edad > 10&& edad<18) {
//   console.log("Aun no estas en la Universidad");
// } else {
//   console.log("Estás en la Universidad");
// }

////

// let edad = 24;

// if (edad > 10) {
//   if (edad < 18) {
//    console.log("Aun no estas en la Universidad"); 
//   }
// }
// else (edad >= 18)
// {
//   console.log("Estás estudiando en la Universidad");
// }

////

// let tieneCoche = false;

// if (!tieneCoche) {
//   console.log("puedes conducir")
// }else {
//   console.error("no puedes conducir")
// }

// SWITCH 13/102

// let objeto = "anciano";

// switch (objeto){
//   case "hombre":
//     console.log("invitarlo a una cerveza");
//       break;
//   case "mujer":
//     console.log("tirarle los tejos");
//     break;
//   case "anciano":
//     console.log("invitarlo a café");
//     break;
//   default:
//     console.log("Marcharse")

    // TERNARIO 14/102
    
    // let likes = 4;

    // if (likes === 1) {
    //   console.log(likes + ` like`);
    // } else {
    //   console.log(likes + ` likes`);

    // }
      
    // USANDO EL OPERADOR TERNARIO

    // console.log((likes===1)? likes +` like` : likes + ` likes`)

//CICLOS 13-14/102

// Ciclo for

// Inicializar contador (1)
// condición que debe cumplirse para que el ciclo se siga ejecutando (2)
// Incremento del contador (3)
// for( expresión-inicial(1); condición(2); expresión—final(3) ) {
// // código que va a repetirse}

// Ciclo While y do While

// do {
//   // código...
// } while expresión ) ;
// EI código se ejecuta antes de evaluar la expresión

 
  
//   while (expresión) {
//     // código...
//   }
// EI código se ejecuta después de evaluar la expresión

// Ciclos for...of y for...in


// for( variable of iterable ) {
// //código...}
// EI ciclo recorre todos los elementos de un
// elemento iterable como un arreglo o una
// cadena de texto
  
  
// for( variable in objecto ) {
// //código...}
// EI ciclo recorre todas las propiedades de un objeto

// Ciclos (prácticas) 16/102

// let i=0;

// for (let i = 1; i <= 10; i++){
//   console.log(i + 'Hola');

// }

// for (let i = 10; i >= 1; i--){
//   console.log(i);

// }

// for (let i = 1, j = 2; i < 400; i *= j, j *= j){
//   console.log(i, j);
// }
// console.log("Final de ciclo")

// Ciclo While 17/102

// const archivo="Bienvenidos al curso de Javascript/"

//do while

// let contador = 0;
// let letra = '';
// let texto = '';

// do {

//   letra = archivo[contador];
//   contador++;
//   texto += letra;
// }
//   while (letra != '/');

//   console.log(texto);
  

  //while

// contador = 0;
//   texto = '';
//   letra = '';
//   while (letra != '/') {
//     letra = archivo[contador];
//     contador++;
//     texto += letra;
//   }
// console.log(texto)
  

// FUNCIONES 18/102

// Código encapsulado que puede ser ejecutado en diferentes etapas de un programa

// function(1) nombre(2)(arg1, arg2,...,argN)(3) {
//   // código a ejecutar
//   return value(4)
// }

  // (1)Palabra reservada
  // (2) Nombre único por el que se va a llamar a la función
  // (3)Parámetros de entrada requeridos para que la función se ejecute correctamente. Son opcionales y separados por comas
  // (4)Las funciones pueden o regresar un valor o resultado derivado del código y los argumentos

// Otra forma de definir una función(a través de una variable)

// (1)Nombre de la función
// function iniciarUI(1) (param1 ,param2) {
// // código
  
// (2) Nombre de variable
//   const iniciarUI(2) = function (param1, param2) {
//     // código
//   }

// DEFINIR FUNCIONES 17/102

// function suma(){
//     console.log("inicia función");
//     let numero01 = 4;
//     let numero02 = 6;
//     let respuesta = numero01 + numero02;
//     console.log(`Respuesta: ${respuesta}`);
//     console.log("termina función");
// }

// suma();

// const resta = function(){
//     console.log("inicia función");
//     let numero01 = 10;
//     let numero02 = 5;
//     let respuesta = numero01 - numero02;
//     console.log(`Respuesta: ${respuesta}`);
//     console.log("termina función");
// }

// resta();

// function multiplicacion(numero01, numero02){
//     console.log("inicia función");
//     if(isNaN(numero01) || isNaN(numero02)) throw new Error("No son numeros");
//     let respuesta = numero01 * numero02;
//     console.log(`Respuesta: ${respuesta}`);
//     console.log("termina función");
// }

// multiplicacion('5', '9');

// inicia función
// Respuesta: 10
// termina función

// inicia función
// Respuesta: 5
// termina función

// inicia función
// Respuesta: 45
// termina función

// Argumentos de funciones (teoría) 18/102

// function suma(numero1, numer02) {
//               //argumentos
//   let res = numero1 + numer02;
//   return res
//}

// Ejemplos de Tipos de argumentos posibles

// suma(2, 3);
// suma('Hola', 3 ) ;
// suma([2, 4, 6], "hey!");
// suma({ nombre: "Marcos" }, 6);

// Aunque puede suceder que mezclando algunos de estos argumentos obtengamos un resultado que no es el deseado ;-)

// Notación cuando desconocemos el número de argumentos de la función

// function suma(...numeros){
//   let res = 0;
//   for (let i = 0; i < numeros.length; i++) {
//     res += numeros[i]
//   }
  
//   console.log('la suma es '+ res)
//   }
// suma( 2, 3, 1, 6, 5)

// Argumentos de funciones (práctica) 19/102

// function area(figura, base = 0, altura = 0) {
//   switch (figura) {
//     case "cuadrado":
//       return base * base;
//     case "rectangulo":
//       return base * altura;
//     case "triangulo":
//       return (base * altura) / 2;
//     default:
//       throw new Error("Figura no encontrada");
//   }
// }

// console.log(area("cuadrado", 5));
// console.log(area("rectangulo", 10, 15));
// console.log(area("triangulo", 5, 8));


// function perimetro(...lados) {
//   let poligono = 0;
//   for (let i = 0; i < lados.length; i++) {

//     poligono += lados[i];
//   }

//   console.log(`El perímetro de la figura es ${ poligono }`);
// }

// perimetro(2, 3, 5, 7, 8);



// const suma = function (...numeros) {
//   let suma = 0;
//   let contador = 0;

//   while (contador<numeros.length) {
//     suma += numeros[contador];
//     contador++;
//   }

//   return suma
// }


// console.log(`la suma es ${suma(2, 4, 5, 6)}`);


// Funciones anónimas y funciones flecha (Teoría) 20/102

// Funciones anónimas

// Funciones que no tienen nombre
// Se pueden usar entre otras cosas para encapsular otras funciones



// Funciones anónimas
//   (function () {
// // código
//     });
// Definición
  
  
//   (function () {
// // código
//     })();
// Ejecución


// Funciones de flecha

// Hay que definir una variable o una función anónima para crearlas
// Buscan simplificar la sintaxis del código


// funcion normal
// function iniciarUI(param1, param2) {
//   // código
// }

// función flecha
// const iniciarUI = (param1, param2) => {
//   // código
// }

// - Si la función flecha solo tiene un parámetro podemos eliminar los paréntesis.
// - Si solo tiene una linea de código, no es necesario poner las llaves ni el return,
//   que enestos casos está implícito

// Ejemplo:
  
// const saludo = nombre => 'Hola' + nombre

// Funciones anónimas y funciones flecha (práctica) 21/102

// function gradosCaK(valor) {
//   return valor * 274.15;
// }


// simplificar la sintaxis para convertirla en funcion flecha

// const gradosCaK = valor => valor * 274.15;
 

//   // Funcion anonima

//   (function (){
//     console.log('funcion anónima');
//   }) ();
  
// console.log(gradosCaK(20));

// (() => {
//   function gradosCaK(valor) {
//     return valor * 274.15;
//   }

//   console.log(gradosCaK(1));
// })();

  
 // Generadores (teoria) 24/102
  
// function* secuencia(){
// yield 1
// yield 2
// yield 3
// return 4
// }


// let generator = secuencia();
// let uno = generator.next();
// let dos = generator.next();


// Generadores (practica) 25/102
 
function *nombres(){
  yield 'Juan';
  yield 'Maria';
  yield 'Sergio';
  yield 'Ari';

  return 'Marcos';
}

const iterator = nombres();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());


for (const itItem of iterator) {
  console.log(itItem);
}

function* numero(){
  let contador= 0;
  while(true){
      yield contador;
      contador++;
  }
}


const it2 = numero();




// Closure


