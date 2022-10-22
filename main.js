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
 
// function *nombres(){
//   yield 'Juan';
//   yield 'Maria';
//   yield 'Sergio';
//   yield 'Ari';

//   return 'Marcos';
// }

// const iterator = nombres();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());


// for (const itItem of iterator) {
//   console.log(itItem);
// }

// function* numero(){
//   let contador= 0;
//   while(true){
//       yield contador;
//       contador++;
//   }
// }


// const it2 = numero();

// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());


// Closure (teoría) 24/102


// ejemplo 1

// function generarUI(){
// function actualizarDatos(){}
// actualizarDatos();
// }
// generarUI();


 // ejemplo 2

// function generarUI(){
// let panel = 'edicion';
// function actualizarDatos(){
// console . log(panel);
// }
// return actualizarDatos ;
// }
// let res = generarUI();

// res();

// ejemplo 3


// function suma(n1){
// return function(n2){
// return n1+n2;
// }
// }
// let res = suma (10);
// console.log(res(5));


// Clausuras (prácticas) 25/102

// var nombre = 'Julio';

// function uno(){
//     console.log('Inicio funcion 1');

//     var nombre = 'Marcos';
//     console.log(this.nombre);

//     function dos(){
//         console.log('Inicio funcion 2');
//         var nombre = 'Lena';
//         console.log(this.nombre);

//         function tres(){
//             console.log('Inicio funcion 3');
//             let nombre = 'Juan';
//             console.log(nombre);
//         }

//         tres();

//     }

//     dos();
// }

// uno();


// let nombre ='julio';

// function uno(){
// console.log( 'Funcion 1');
// let nombre = 'Marcos';
// console. log( nombre);

// return function dos(){
// console. log( 'Funcion 2');
// nombre = 'Lena';
// console. log( nombre);

// return function tres(){
// console. log( 'Funcion 3');
// let nombre = 'Maria';
// console.log(nombre);
// }}}

// const resultado01 = uno();
// const resultado02 = resultado01();
// const resultado03 = resultado02();

//->Funcion 1
//->Marcos
//->Funcion 2
//->Lena
//->Funcion 3
//->Maria

// String (teoría) 28/102

// text0.length; Conocer la longitud 
// texto[7]=; Conocer un caracter en concreto. Basados en el índice
// texto.indexOf(); Regresa el indice de la primera ocurrencia del texto a buscar
// texto.lasIndexOf(); Regresa el indice de la última ocurrencia del texto a buscar
// texto.slice(); Extrae una parte del texto y lo devuelve
// texto.substr(); Extrae una parte del texto basado en una cantidad de caracteres
// texto.replace(); Devuelve un texto reemplazando parte de él con otro
// texto.upperCase(); Convierte un texto en mayúsculas
// texto.lowerCase(); Convierte un texto en minúsculas
// texto.concat(); Une dos o más cadenas de texto
// texto.trim(); elimina los espacios al principio y final del texto
// texto.split(); Convierte una cadena de texto en arreglo definido por un separador


// Arreglos (Teoría)



// | 4 | 1 | 8 | 10 | 0 | 9 |    -> arreglo
//   0   1   2    3   4   5      -> Indice 

//  let nombre = [4,1,8,10,0,9]; 
//  // llamar a un valor del arreglo
//  nombre[4]; //-> 0
//  nombre[7] = 4;
//  console.log(nombre);
 //-> [ 4, 1, 8, 10, 0, 9, <1 empty item>, 4 ]

// Obtener número de elementos de un arreglo

// Array.length

// Arreglos (práctica) 30/102

// definir un arreglo

// let nombres = new Array(5);
// nombres[0] = 'Juan';
// nombres[1] = 'Maria';
// nombres[2] = 'Sergio';
// nombres[3] = 'Lena';
// nombres[4] = 'Ramiro';


// listar todos los elementos

// console.log(nombres);


// nombres[10] = 'Marcos';


// console.log(nombres, nombres[5]); 
//-> (11) ['Juan', 'Maria', 'Sergio', 'Lena', 'Ramiro', vacío × 5, 'Marcos']

// Otra forma de definir un arreglo

// let calificaciones = [56, 77, 94, 79, 99, 100];

// console.log(calificaciones[5]); //-> 100

// nombres[1] = 23;
// calificaciones[2] = 'Juan';

 // console.log(nombres, calificaciones);
 // -> (6) [56, 77, 'Juan', 79, 99, 100]
 // console.log(nombres.length, calificaciones.length);
//-> 11 6

// for(let i = 0; i < nombres.length; i++){
//     console.log(nombres[i]);
// }
// Juan
// 23
// Sergio
// Lena
// Ramiro

// for(calificacion of calificaciones){
//     console.log(calificacion);
// }

// 56
// 77
// Juan
// 79
// 99
// 100


// Metodos clásicos de arreglos (teoría) 31/102

// Notación:
// variable . metodo (params)

// Insertar un nuevo elemento al final del arreglo
// variable . push (params)

// Regresa la posición de la primera coincidencia
// variable . indexOf (params)
// Devuelve -1 si el elemento que solicitamos no existe

// Eliminar el primer elemento del arreglo
// variable . shift (params)

// Agregar un elemento al principio del arreglo
// variable . unshift (params)

// Unir los elementos de un arreglo en una cadena
// variable . join (params) //el parametro indica el carácter de separación que queremos incluir

// convertir una cadena en un arreglo
// variable . split (params)


// Metodos clásicos de arreglos (práctica) 32/102

//  let coordenadas = [10.236, 14.334, 11.325, 15.234];


//  // push para añadir elemento
//  console.log('coordenadas', coordenadas);

//  coordenadas.push(20.389);

//  console.log('coordenadas', coordenadas);

//  //indexOf para buscar el indice de un elemento
//  const posicion = coordenadas.indexOf(14.334);

 
//  console.log('indexof', posicion, coordenadas[posicion]);
//  // -> indexof 1 14.334

// // unshift para agregar un elemento al inicio

// //  coordenadas.unshift(11.11);
// //  console.log(coordenadas);
// //->[11.11, 10.236, 14.334, 11.325, 15.234, 20.389]

// // join convierte un arreglo en cadena

// // const bienvenida = ['bienvenido', 'al', 'curso'];
// // console.log(bienvenida.join('&'));
// //-> bienvenido&al&curso

// // split convierte una cadena en un arreglo

// // const cuenta = '2356-2321-9874-9900';
// // console.log(cuenta.split('-'));
// //->[ '2356', '2321', '9874', '9900' ]

// Métodos de arreglos avanzados (Teoria) 33/102

// Flat
// Devuelve un arreglo nuevo derivado del resultado de eliminar arreglos
// anidados


// Convertir arreglos anidados:
// ||6|8||9|10||9|7|| 
//    0    1     2    -> Indices   

// en un solo arreglo:
// |6|8|9|10|9|7|
//  0 1 2  3 4 5       -> Indices 

// let calificaciones = [[6,8],[9,10],[9,7]];
// let resultado = calificaciones.flat();
// console.log(resultado);
//-> [ 6, 8, 9, 10, 9, 7 ]

// Sort

// Regresa un arreglo ordenado basado en una función de comparación

// let arreglo = [1,8,10,0,9,3]
// let resultado = arreglo. sort();
// console.log(resultado)
//-> [ 0, 1, 10, 3, 8, 9 ]
// Vemos que no los ordena en orden númerico, sino como carácteres ASCII

//Para ordenarlos numericamente habría que emplear una función de comparación
// function compare(a,b){
//   return a — b;}

//Métodos de arreglos avanzados(práctica) 34/102

// const calificaciones = [10, 7, 4, 6, 2, 8];
// const mensajes = ['hola', 'al', 'curso', 'de', 'javascript'];

//foreach (nos permite hacer un recorrido por nuestro arreglo)

// el nombre de los parametros no tiene ninguna importancia, simplemente debe coincidir con la llamada

// Hay varias formas de usar forEach

// primera

// calificaciones.forEach((elemento, indice)=>console.log(elemento, indice));

//  10 0
//  7 1
//  4 2
//  6 3
//  2 4
//  8 5

//con otro nombre de parametros
 
// calificaciones.forEach((a,b)=>console.log(a,b));
//  10 0
//  7 1
//  4 2
//  6 3
//  2 4
//  8 5



//segunda

//  function iteracion(elemento, indice){
//      console.log(elemento, indice);
//  }

//  calificaciones.forEach(elemento=> console.log(elemento));

// //map nos regresa una arreglo de respuesta

// const nuevoArreglo = calificaciones.map((elemento, indice) =>{
//     return elemento * 5;
// });

// const nuevoArregloMensajes = mensajes.map(elemento =>{
//     return `** ${elemento} **`;
// });

// console.log('calificaciones',calificaciones, 'nuevoArreglo',nuevoArreglo);
// //-> calificaciones [ 10, 7, 4, 6, 2, 8 ] nuevoArreglo [ 50, 35, 20, 30, 10, 40 ]
// console.log(nuevoArregloMensajes);
// //-> [ '** hola **', '** al **','** curso **', '** de **','** javascript **']

//reduce permite coger todos los elementos del arreglo y acumularlos en un nuevo valor

// const arregloReduce = calificaciones.reduce (acc, item)=>acc + item);
// ;

// console.log(arregloReduce);
// //-> 37

//  const arregloReduceString = mensajes.reduce((acc, item) =>acc + ' ' + item );

// console.log(arregloReduceString);
//-> hola al curso de javascript

//---------------------------------------

//Métodos de arreglos avanzados II(práctica) 35/102


//Filter.

//crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.


// const arregloFilter = calificaciones.filter(item => item < 5);
// console.log(arregloFilter);
// //-> [ 4, 2 ]

// const arregloFilterString = mensajes.filter(item => item != 'javascript');
// console.log(arregloFilterString);
//-> [ 'hola', 'al', 'curso', 'de' ]

//Find
// Es parecido a filter, pero regresa unicamente la primera
// coincidencia

// const arregloFind = calificaciones.find(item =>{
//     return item > 5;
//     return item == 100;
// });
// console.log(calificaciones);
// console.log(arregloFind);
//->[ 10, 7, 4, 6, 2, 8 ]
//-> 10


//FindIndex

// const index = calificaciones.findIndex(item =>{
//     return item === 6;
// });
// console.log(index);


//Some

// regresa un valor booleano true o false

// const existe = mensajes.some(item =>{
//     return item === 'javascript';
// });
// console.log(existe);


//----------------------------------------
//Métodos de arreglos avanzados III(práctica) 36/102


//flat

//permite aplanar un arreglo

// const parciales = [[10, 8], [7,5], [10, 10]];
// console.log(parciales.flat());

// const output = [[[[10, 5]]],[2, 8]];
// //-> [ 10, 8, 7, 5, 10, 10 ]
// console.log(output.flat(1));
// //-> [ [ [ 10, 5 ] ], 2, 8 ]

//sort

//El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado

// const arregloOrdenado = calificaciones.sort((a, b) =>{
//     if(a > b) return -1;

//     if(a < b) return 1;

//     return 0;
// });

// const res02 = mensajes.sort((a, b) =>{
//   if(a < b) return -1;

//   if(a > b) return 1;

//   return 0;
// });

// console.log(arregloOrdenado);
// //-> [ 10, 8, 7, 6, 4, 2 ]
// console.log(res02);
// //-> [ 'al', 'curso', 'de', 'hola', 'javascript' ]

// Map (teoría) 37/102

// La diferencia principal de un mapa con un arreglo, es que en el primero nosotros tenemos que decidir el nombre con el que llamamos a los índices


// arreglo
// |1|8|10|0|9|3|
//  0 1  2 3 4 5 
// map
// |1  | 8   |  10  |0     | 9     |  3 |
// Juan Maria Sergio paula  ernesto  lena



// let calificaciones = new Map();
// El método set nos permite ingresar el óndice y el valor. Primero escribimos el índice y separado con una coma el valor quecorresponde a ese índice
// calificaciones.set("juan", "10");
// calificaciones.set("alicia", "8");
// calificaciones.set("pedro", "6");

//Otros métodos de Map

//get. Nos permite introducir el índice y obtener el valor

// calificaciones.get("juan");  // =10

//has. Nos permite saber si un índice existe

// calificaciones.has("juan");     // =true

// delete. Nos elimina el elemento y nos devuelve su valor

//calificaciones.delete("juan");   //=10

//clear. Elimina completamente los elementos de un mapa

//calificaciones.clear("juan");



// console.log(calificaciones);


// Map (práctica) 37/102


// const mapa = new Map();

// mapa.set('juan', 10);
// mapa.set('maria', 4);
// mapa.set('sergio', 3);
// mapa.set('luna', 8);
// mapa.set('harry', 7);

// console.log(mapa);

// console.log(mapa.get("maria"));

// mapa.set("sergio", 6);

// console.log(mapa);
// console.log(mapa.has("luna"));

// for(let elemento of mapa){
//     console.log(elemento[0]);
// }

// Set (Teoria) 39/102


// let calificaciones= new Set();


// calificaciones.add(10);
// calificaciones.add(8);
// calificaciones.add(5);
// calificaciones.add(10);

// console.log(calificaciones);

//la diferencia entre set y map, es que set usa el valor como índice del elemento
// Vemos que set no incluye el último valor de 10 porque este ya existía
// Resulta útil usar set cuando queremos hacer un arreglo donde no se repitan los elementos

// |10|8|5|  -> Valor
//  10 8 5   -> Índice

// Métodos de set

//entries etorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.

// let elementos = calificaciones.entries();

// elementos.next().value;

// console.log(elementos);

// Set (prácticas) 40/102

// const propiedades = new Set();

// propiedades.add("color");
// propiedades.add("tamano");
// propiedades.add("peso");
// propiedades.add("forma");

// console.log(propiedades);

// propiedades.add("color");

// console.log(propiedades);

// const iterador = propiedades.entries();

// console.log(iterador.next().value);

// for(let item of iterador){
//     console.log(item);
// }


// Strings (práctica) 41-42/102

// let mensaje = 'Hubo un error al procesar la solicitud';
// console.log(mensaje);

// mensaje = 'b';
// console.log(mensaje);

// mensaje = 'El usuario fue registrado con exito';
// console.log(mensaje[5]);
// console.log(mensaje.length);

// let texto = "Bienvenidos al curso";
// let texto02 = 'Bienvenidos al curso';
// let texto03 = `Bientenidos al curso.
//                 Este es el temario`;
// console.log(texto, texto02, texto03);

// let nombre = 'Marcos';
// let header = 'Tu resumen del dia, ' + nombre;
// let header02 = `Tu resumen del dia, ${nombre}`;

// console.log(header, header02);

// const nombre01 = 'Oscar';
// const nombre02 = 'oscar';
// console.log(nombre01 == nombre02);

// //--------------------------------------

// mensaje = "Curso de Javascript para principiantes";

// //indexof
// console.log(mensaje.indexOf('javascript'));
// console.log(mensaje.indexOf(' '));
// console.log(mensaje.indexOf('php'));

// //lastIndexOf
// console.log(mensaje.lastIndexOf('a'));
// console.log(mensaje.lastIndexOf('ip'));

// //slice
// let res = mensaje.slice(5, 10);
// console.log(res);

// //substr
// res = mensaje.substr(5,5);
// console.log(res);

// //replace
// res = mensaje.replace('Javascript', '.NET');
// console.log(res, mensaje);

// //toUpperCase
// res = mensaje.toUpperCase();
// console.log(res);

// //lowercase
// res = mensaje.toLowerCase();
// console.log(res);

// //concat
// let primerNombre = 'Juan ';
// let segundoNombre = 'Camilo ';
// let apellido = 'Garcia ';

// let nombreCompleto = primerNombre.concat(segundoNombre, apellido);
// console.log(nombreCompleto);

// //trim
//  let respuestaHTTP = '         transaccion exitosa        ';
//  console.log(respuestaHTTP);
//  console.log(respuestaHTTP.trim());

// //split
// const mensajeError = 'Busqueda no devolvio respuestas';
// console.log(mensajeError.split(' '));
// console.log(mensajeError.split(''));


// Objetos (teoría) 43/102

// Los objetos tienen llaves, clave y valor

// {
// clave :valor
// }

// arreglos de objetos

// [
// {clave :valor}
// {clave :valor}
// {clave :valor}
// {clave :valor}
// {clave :valor}
// ]

//Definir un objeto: Hay dos formas de definirlo

// let isabelle= new Object();

// isabelle ['altura ']= 150;
// isabelle ['color—pelo']= "amarillo";
// isabelle ['velocidad']= "lento";

//La segunda forma de definirlo es la que habitualmente se usa por ser más ágil visualmente

// let isabelle={
// altura: 150,
// color_pelo: "amarillo" ,
// velocidad: "lento",
// feliz: true,
// chaleco: {
// color: "verde"}
// };

// //Como acceder a las propiedades
// isabelle.altura  //150
// // ó
// isabelle["velocidad"]   //lento
// //para acceder a las propiedades de un objeto que está dentro de nuestro objeto
// isabelle.chaleco.color   //verde
// // para acceder a un arreglo de objetos

// let personajes=[
// {altura:150,
// color_pelo: "amarillo",
// chaleco:{
//   color: "verde"
// }
// },
// {altura:140,
// color_pelo: "cafe",
// chaleco:{
//   color: "azul"
// }
// },
// {altura:160,
// color_pelo: "blanco",
// chaleco:{
//   color: "undefined"
// }
// }
// ]

// console.log(personajes[1]);
// //-> { altura: 140, color_pelo: 'cafe', chaleco: { color: 'azul' } }


// console.log(personajes[1].chaleco.color);
// //-> azul

// Objetos (prácticas) 44/102

// let objeto = {
//   nombre: 'Marcos',
//   edad: 28,
//   habilidades: ['programacion', 'dibujo', 'baile'],
//   frances: false
// };

// console.log(objeto);
// console.table(objeto);

// let post = {
//   fecha: '2020/12/12',
//   titulo: '5 trucos VS Code',
//   author: {
//       nombre: 'Juanito',
//       photo: 'img/photo.jpg',
//   },
//   comentarios: [
//       {
//           id: 1,
//           texto: 'Buen contenido'
//       },
//       {
//           id: 2,
//           texto: 'No conocia el truco #2'
//       }
//   ]
// };

// console.log(post);
// console.log(post.comentarios);
// post.author.nombre = 'Laura';
// console.log(post);
// console.log(post.comentarios[0], post['comentarios'][0]);
// console.log(post.comentarios[0].texto, post['comentarios'][0]['texto']);

// post['likes'] = 56;

// console.table(post);
// console.log(post.shares);

// //for...in sirve exclusivamente para objetos

// for(propiedad in post){
//   console.log(propiedad);
// }

// Métodos de objetos (teoría) 45/102

// let kk = {
// altura: 160,
// color_pelo: "blanco" ,

// }

//Como añadimos un método, por ejemplo cantar

// let kk = {
//   altura: 160,
//   color_pelo: "blanco" ,
//   cantar: function(){
//     return "guau";
//   }
  
//    };

//    console.log(kk.cantar());
//    //->guau


   // Métodos de objetos (práctica) 46/102

//    const usuario = {
//     id: 5,
//     nombre: 'Sarah',
//     edad: 38,
//     saludo: function(){
//         return `Hola! es un gusto que nos visites`;
//     }
// };

// console.log(usuario.saludo());

// const viaje = {
//     tiempo: function(distancia, velocidad){
//         return distancia / velocidad;
//     }
// };

// console.log(viaje.tiempo(40, 60));

// const viaje02 = {
//      distancia: 40,
//      velocidad: 60,
//     tiempo: function(){
//         return this.distancia / this.velocidad;
//     }
// };

// console.log(viaje02.tiempo());
// //-> 0.6666666666666666


// Como funciona this (teoría) 47/102

// this.Hace referencia al objeto que lo contiene
// pero el valor depende de cómo se use

// En este ejemplo this hace referencia al objeto que lo contiene
// Se ve mucho en las clases y la POO

// en un objeto this hace referencia al
// mismo objeto, con el cual se puede
// acceder a sus propiedades y métodos


// let post={
// likes: 160,
// getLikes: function(){
// return this.likes `likes`;
// }
// };
 
// console.log(post);

// this en una función o en un contexto
// donde se manda a llamar sin estar en
// ningún objeto representa al objeto Global

// function prueba(){
//   return this;
// };

// this cuando se usa en eventos contiene al
//  elemento HTML que activó el evento


// button addEventListener("click", function(e)
// {console. log(this);});

// this no existe bajo el contexto de las
// funciones de flecha, por 10 tanto al
// querer obtener la propiedad regresará
// undefined
// this por si solo en una función de flecha hace referencia al objeto Global

// Como funciona this (práctica) 47/102

// let edad = 10;
// let nombre = 'John';

// this.nombre = 'Jessica';
// this.edad = 40;


// const usuario = {
//     id: 5,
//     nombre: 'Sarah',
//     edad: 38,
//     saludo: function(){
//         return `Hola ${this.nombre}!`;
//     },

//     getEdad: function(){
//         return this.edad;
//     }
// };

// console.log(usuario.saludo());
// console.log(usuario.getEdad());
// console.log(this);