// https://www.youtube.com/playlist?list=PLYOJU3c8foCBA4244OpgdUAlMF14fEN7J

# VARIABLES 6/102

## **Crear variable**

```js
let nombre = "Angel";

console.log(nombre);
```

## **Cambiar valor a una variable**

```js
let edad = 67;
edad = 68;

console.log(edad);

let tieneCoche = false;

console.log(tieneCoche);
```

# OPERADORES

## **Operadores aritmeticos**

```js
let a = 5;
let b = 10;
let c = a + b;

console.log(a, b, c);

c = 50;
c = c + 20;
c += 20;
c += 1;
c++;
c -= 10;
c *= 2;
c /= 5;
c = 3;
c **= 4;
c = 3;
c = c ** 4;
c = 2;
let d = 3;
c += d;
c *= d;
c **= d;
c /= d;

console.log(c);
```

## **Operadores lógicos 5/102**

```js
let a = 2;
let b = 4;
console.log(a >> b);
console.log(a << b);
console.log(a / b);
console.log(a & b);
```

## **operadores de comparacion 6/102**

```js
 let nombre01 = "juan";
 let nombre02 = "Pedro";

 console.log(nombre01 == nombre02);
 -> false
 console.log(nombre01 === nombre02);
 -> false
 console.log(nombre01 != nombre02);
 -> true
 console.log(nombre01 !== nombre02);
 -> true

 let edad01 = 10;
 let edad02 = 10;

 console.log(edad01 < edad02, edad01 > edad02, edad01 >= edad02)
 -> false false true

 edad01 = 15;
 let peso = "15";

 console.log(edad01 == peso, edad01 === peso);
 -> true false

 console.log(edad01 + peso);
  1515 (concatena, no suma)

 console.log([] == 0);
 true
 console.log(1 === true);
 -> false
 console.log('0' === 0);
 false
 console.log('0' == 0);
 true
```

# CONDICIONALES IF 9/102

## **if**

Las if statements te permiten ejecutar una sección específica del código cuando una prueba es verdadera. El código dentro del paréntesis () es la prueba. Si la prueba es verdadera, entonces el código dentro del {} del bloque se ejecuta. Si la prueba no es verdadera, el código dentro del bloque no se ejecuta.

#### **Código de ejemplo**

```js
var aNumber = 5;
if (aNumber === 5) {
  drawBox(blue);
}
if (aNumber === 4) {
  drawBox(red);
}
```

En este ejemplo, a la variable aNumber se le asigna el número 5. Hay dos if statements. La primera es comprobar si aNumber es igual a 5. La segunda es comprobar si es igual a 4. Solo la primera prueba de la if statement es verdadera, por lo que se dibujaría un cuadro azul.

```js
let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}

edad = 15;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.error("Aun no eres mayor de edad");
}

edad = 24;

if (edad > 10 && edad < 18) {
  console.log("Aun no estas en la Universidad");
} else {
  console.log("Estás en la Universidad");
}

if (edad > 10) {
  if (edad < 18) {
    console.log("Aun no estas en la Universidad");
  }
} else edad >= 18;
{
  console.log("Estás estudiando en la Universidad");
}

let tieneCoche = false;

if (!tieneCoche) {
  console.log("puedes conducir");
} else {
  console.error("no puedes conducir");
}
```

## **Switch 13/102**

```js
 let objeto = "anciano";

 switch (objeto)
   case "hombre":
     console.log("invitarlo a una cerveza");
       break;
   case "mujer":
     console.log("tirarle los tejos");
     break;
   case "anciano":
     console.log("invitarlo a café");
     break;
   default:
     console.log("Marcharse")
```

## **Ternario 14/102**

#### **Usando if**

```js
let likes = 4;

if (likes === 1) {
  console.log(likes + ` like`);
} else {
  console.log(likes + ` likes`);
}
```

#### **Usando el operador ternario**

console.log((likes===1)? likes +` like` : likes + ` likes`)

# CICLOS 13-14/102

## **Ciclo for**
```js
- for( expresión-inicial(1); condición(2); expresión—final(3) ) {
  código que va a repetirse}
```

- Inicializar contador (1)
- condición que debe cumplirse para que el ciclo se siga ejecutando (2)
- Incremento del contador (3)


## **Ciclo While y do While**

```js
 do {
   // código...
 } while expresión ) ;

// EI código se ejecuta antes de evaluar la expresión

   while (expresión) {
     // código...
   }
// EI código se ejecuta después de evaluar la expresión
```

## **Ciclos for...of y for...in**

```js
for( variable of iterable ) {
 //código...}
// EI ciclo recorre todos los elementos de un
// elemento iterable como un arreglo o una
// cadena de texto

 for( variable in objecto ) {
 //código...}
// EI ciclo recorre todas las propiedades de un objeto
```

# Ciclos (prácticas) 16/102

```js
 let i=0;

 for (let i = 1; i <= 10; i++){/   console.log(i + 'Hola');

 }

 for (let i = 10; i >= 1; i--){
   console.log(i);

 }

 for (let i = 1, j = 2; i < 400; i *= j, j *= j){
   console.log(i, j);
 } console.log("Final de ciclo")
```

## **Ciclo While 17/102**

const archivo="Bienvenidos al curso de Javascript/"

#### do while

```js
let contador = 0;
let letra = "";
let texto = "";

do {
  letra = archivo[contador];
  contador++;
  texto += letra;
} while (letra != "/");

console.log(texto);
```

#### while

```js
contador = 0;
texto = "";
letra = "";
while (letra != "/") {
  letra = archivo[contador];
  contador++;
  texto += letra;
}
console.log(texto);
```

# FUNCIONES 18/102

Código encapsulado que puede ser ejecutado en diferentes etapas de un programa

````js
 function(1) nombre(2)(arg1, arg2,...,argN)(3) {
   // código a ejecutar
   return value(4)
 }

// (1)Palabra reservada
// (2) Nombre único por el que se va a llamar a la función
// (3)Parámetros de entrada requeridos para que la función se ejecute correctamente. Son opcionales y separados por comas
// (4)Las funciones pueden o regresar un valor o resultado derivado del código y los argumentos

#### Otra forma de definir una función(a través de una variable)
```js
 (1)Nombre de la función
 function iniciarUI(1) (param1 ,param2) {
 // código

 (2) Nombre de variable
   const iniciarUI(2) = function (param1, param2) {
         // código
   }
````

# DEFINIR FUNCIONES 17/102

function() {}
Una función guarda un bloque de código. Puedes ejecutarla siempre que haga referencia al nombre de la función. El código dentro del {} del bloque se ejecutará cuando se llama el nombre de la función.

#### **Código de ejemplo**

```js
 function addSquare() {
     svg​.append('rect')​.attr('width',10)​.attr('height',10);
 }
 addSquare();

 // La palabra clave función le dice al código que quieres crear una función. La función addSquare creará un nuevo rectángulo SVG con un alto y ancho de 10. Para ejecutar el código dentro de la función, se debe llamar al nombre de la función: addSquare();
```

## **Parámetros**

// Un parámetro es un tipo especial de variable que se usa para especificar la entrada de una función.

// Los parámetros se definen dentro del paréntesis () de una declaración de función, y se comportan como una variable dentro de una función. Solo existen dentro de la declaración de función.

#### **Código de ejemplo**

```js
function sum(number1, number2) {
  return number1 + number2;
}

sum(4, 7);

// En la declaración de función sum(), number1 y number2 son los parámetros. La función devuelve la suma de los 2 parámetros.

// Cuando se llama a la función, los números que se pasan a ella se llaman argumentos. En este código de ejemplo, 4 y 7 son argumentos.
```

## **Bloque de código**

Una secuencia de comandos agrupados dentro de llaves {}.

#### **Código de ejemplo**

```js
if (learningToCode === "fun") {
  print("Coding is awesome!");
  print("I want to solve more puzzles!");
}
// Si la variable learningToCode es igual a 'fun', entonces se ejecutará el código dentro del bloque de código {}.

function suma() {
  console.log("inicia función");
  let numero01 = 4;
  let numero02 = 6;
  let respuesta = numero01 + numero02;
  console.log(`Respuesta: ${respuesta}`);
  console.log("termina función");
}

suma();

const resta = function () {
  console.log("inicia función");
  let numero01 = 10;
  let numero02 = 5;
  let respuesta = numero01 - numero02;
  console.log(`Respuesta: ${respuesta}`);
  console.log("termina función");
};

resta();

function multiplicacion(numero01, numero02) {
  console.log("inicia función");
  if (isNaN(numero01) || isNaN(numero02)) throw new Error("No son numeros");
  let respuesta = numero01 * numero02;
  console.log(`Respuesta: ${respuesta}`);
  console.log("termina función");
}

multiplicacion("5", "9");

// inicia función
// Respuesta: 10
// termina función

// inicia función
// Respuesta: 5
// termina función

// inicia función
// Respuesta: 45
// termina función
```

# Argumentos de funciones (teoría) 18/102

```js
 function suma(numero1, numer02) {
 //argumentos
 let res = numero1 + numer02;
 return res
}
```
#### Ejemplos de Tipos de argumentos posibles
```js
 suma(2, 3);
 suma('Hola', 3 ) ;
 suma([2, 4, 6], "hey!");
 suma({ nombre: "Marcos" }, 6);
```
 Aunque puede suceder que mezclando algunos de estos argumentos obtengamos un resultado que no es el deseado ;-)

 Notación cuando desconocemos el número de argumentos de la función
```js
 function suma(...numeros){
 let res = 0;
 for (let i = 0; i < numeros.length; i++) {
 res += numeros[i]
 }

 console.log('la suma es '+ res)
 }
 suma( 2, 3, 1, 6, 5)
```

# Argumentos de funciones (práctica) 19/102
```js
 function area(figura, base = 0, altura = 0) {
 switch (figura) {
 case "cuadrado":
 return base _ base;
 case "rectangulo":
 return base _ altura;
 case "triangulo":
 return (base \* altura) / 2;
 default:
 throw new Error("Figura no encontrada");
 }
 }

 console.log(area("cuadrado", 5));
 console.log(area("rectangulo", 10, 15));
 console.log(area("triangulo", 5, 8));
```
```js
 function perimetro(...lados) {
 let poligono = 0;
 for (let i = 0; i < lados.length; i++) {

 poligono += lados[i];
 }

 console.log(`El perímetro de la figura es ${ poligono }`);
 }
```
```js
 perimetro(2, 3, 5, 7, 8);

 const suma = function (...numeros) {
 let suma = 0;
 let contador = 0;

 while (contador<numeros.length) {
 suma += numeros[contador];
 contador++;
 }

 return suma
 }

// console.log(`la suma es ${suma(2, 4, 5, 6)}`);
```

# Funciones anónimas y funciones flecha (Teoría) 20/102

## **Funciones anónimas**

 #### Funciones que no tienen nombre
 ```js
 Se pueden usar entre otras cosas para encapsular otras funciones
 (function () {
 // código
 });

 Definición

 (function () {
 // código
 })();

 Ejecución
```

## **Funciones de flecha**

 Hay que definir una variable o una función anónima para crearlas
 Buscan simplificar la sintaxis del código

#### funcion normal
```js
 function iniciarUI(param1, param2) {
 // código
 }
```
#### función flecha
```js
 const iniciarUI = (param1, param2) => {
 // código
 }

 - Si la función flecha solo tiene un parámetro podemos eliminar los paréntesis.
 - Si solo tiene una linea de código, no es necesario poner las llaves ni el return, que en estos casos está implícito
```
#### Ejemplo:

```js
const saludo = (nombre) => "Hola" + nombre;
```

# Funciones anónimas y funciones flecha (práctica) 21/102

#### Función flecha

```js
function gradosCaK(valor) {
  return valor * 274.15;
}

#### simplificar la sintaxis para convertirla en funcion flecha

const gradosCaK = (valor) => valor * 274.15;
```

#### Funcion anonima

```js
   (function (){
     console.log('funcion anónima');
   }) ();

 console.log(gradosCaK(20));

 (() => {
   function gradosCaK(valor) {
     return valor * 274.15;

   console.log(gradosCaK(1));
 })();
```

# Generadores (teoria) 24/102
```js
 function\* secuencia(){
 yield 1
 yield 2
 yield 3
 return 4
 }

 let generator = secuencia();
 let uno = generator.next();
 let dos = generator.next();
```
# Generadores (practica) 25/102

```js
function* nombres() {
  yield "Juan";
  yield "Maria";
  yield "Sergio";
  yield "Ari";

  return "Marcos";
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

function* numero() {
  let contador = 0;
  while (true) {
    yield contador;
    contador++;
  }
}

const it2 = numero();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
```

## **Closure (teoría) 24/102**

#### ejemplo 1

```js
function generarUI() {
  function actualizarDatos() {}
  actualizarDatos();
}
generarUI();
```

#### ejemplo 2

```js
function generarUI() {
  let panel = "edicion";
  function actualizarDatos() {
    console.log(panel);
  }
  return actualizarDatos;
}
let res = generarUI();

res();
```

#### ejemplo 3

```js
function suma(n1) {
  return function (n2) {
    return n1 + n2;
  };
}
let res = suma(10);
console.log(res(5));
```

# Clausuras (prácticas) 25/102
```js
 var nombre = 'Julio';

 function uno(){
 console.log('Inicio funcion 1');

 var nombre = 'Marcos';
 console.log(this.nombre);

 function dos(){
 console.log('Inicio funcion 2');
 var nombre = 'Lena';
 console.log(this.nombre);

 function tres(){
 console.log('Inicio funcion 3');
 let nombre = 'Juan';
 console.log(nombre);
 }

 tres();

 }

 dos();
 }

 uno();

 let nombre ='julio';

 function uno(){
 console.log( 'Funcion 1');
 let nombre = 'Marcos';
 console. log( nombre);

 return function dos(){
 console. log( 'Funcion 2');
 nombre = 'Lena';
 console. log( nombre);

 return function tres(){
 console. log( 'Funcion 3');
 let nombre = 'Maria';
 console.log(nombre);
 }}}

 const resultado01 = uno();
 const resultado02 = resultado01();
 const resultado03 = resultado02();

//->Funcion 1
//->Marcos
//->Funcion 2
//->Lena
//->Funcion 3
//->Maria
```

# String (teoría) 28/102



 |Método             | Valor                                    |
 |--|--|
 |text0.length;      | Conocer la longitud                                                       |
 |texto[7]=;         | Conocer un caracter en concreto. Basados en el índice                                                   |
 |texto.indexOf();   | Regresa el indice de la primera ocurrencia del texto a buscar      |
 |texto.lasIndexOf();| Regresa el indice de la última ocurrencia del texto a buscar       |
 |texto.slice();     |Extrae una parte del texto y lo devuelve                            |
 |texto.substr();    | Extrae una parte del texto basado en una cantidad de caracteres    |
 |texto.replace();   |  Devuelve un texto reemplazando parte de él con otro               |
 |texto.upperCase(); | Convierte un texto en mayúsculas                                   |
 |texto.lowerCase(); | Convierte un texto en minúsculas                                   |
 |texto.concat();    |Une dos o más cadenas de texto                                      |
 |texto.trim();      |elimina los espacios al principio y final del texto                 |
 |texto.split();     |Convierte una cadena de texto en arreglo definido por un separador  |

# Arreglos (Teoría) 29/102
```js
---------------------------
 | 4 | 1 | 8 | 10 | 0 | 9 | -> arreglo
 | 0 |  1| 2 | 3  | 4 | 5 | -> Indice
---------------------------
 let nombre = [4,1,8,10,0,9];
// llamar a un valor del arreglo
 nombre[4]; //-> 0
 nombre[7] = 4;
 console.log(nombre);
-> [ 4, 1, 8, 10, 0, 9, <1 empty item>, 4 ]
```

## **Obtener número de elementos de un arreglo**
```js
 Array.length
```

# Arreglos (práctica) 30/102

## **definir un arreglo**

```js
 let nombres = new Array(5);
 nombres[0] = 'Juan';
 nombres[1] = 'Maria';
 nombres[2] = 'Sergio';
 nombres[3] = 'Lena';
 nombres[4] = 'Ramiro';
```
## **listar todos los elementos**
```js
 console.log(nombres);

 nombres[10] = 'Marcos';

 console.log(nombres, nombres[5]);
 -> (11) ['Juan', 'Maria', 'Sergio', 'Lena', 'Ramiro', vacío × 5, 'Marcos']
```
## **Otra forma de definir un arreglo**

```js
 let calificaciones = [56, 77, 94, 79, 99, 100];

 console.log(calificaciones[5]); //-> 100

 nombres[1] = 23;
 calificaciones[2] = 'Juan';

 console.log(nombres, calificaciones);
 -> (6) [56, 77, 'Juan', 79, 99, 100]
 console.log(nombres.length, calificaciones.length);
 -> 11 6

 for(let i = 0; i < nombres.length; i++){
 console.log(nombres[i]);
 }

// Juan
// 23
// Sergio
// Lena
// Ramiro

 for(calificacion of calificaciones){
 console.log(calificacion);
 }

// 56
// 77
// Juan
// 79
// 99
// 100
```
# Metodos clásicos de arreglos (teoría) 31/102
```js
// Notación:
 variable . método (params)

// Insertar un nuevo elemento al final del arreglo
 variable . push (params)

// Regresa la posición de la primera coincidencia
 // Devuelve -1 si el elemento que solicitamos no existe
 variable . indexOf (params)

// Eliminar el primer elemento del arreglo
 variable . shift (params)

// Agregar un elemento al principio del arreglo
 variable . unshift (params)

// Unir los elementos de un arreglo en una cadena
 variable . join (params) //el parametro indica el carácter de separación que queremos incluir

// convertir una cadena en un arreglo
 variable . split (params)
```

# Metodos clásicos de arreglos (práctica) 32/102
```js
 let coordenadas = [10.236, 14.334, 11.325, 15.234];

// push para añadir elemento
 console.log('coordenadas', coordenadas);

 coordenadas.push(20.389);

 console.log('coordenadas', coordenadas);

// //indexOf para buscar el indice de un elemento
 const posicion = coordenadas.indexOf(14.334);

 console.log('indexof', posicion, coordenadas[posicion]);
 -> indexof 1 14.334

 unshift para agregar un elemento al inicio

 coordenadas.unshift(11.11);
 console.log(coordenadas);
->[11.11, 10.236, 14.334, 11.325, 15.234, 20.389]

// join convierte un arreglo en cadena

 const bienvenida = ['bienvenido', 'al', 'curso'];
 console.log(bienvenida.join('&'));
-> bienvenido&al&curso

// split convierte una cadena en un arreglo

 const cuenta = '2356-2321-9874-9900';
 console.log(cuenta.split('-'));
->[ '2356', '2321', '9874', '9900' ]
```
# Métodos de arreglos avanzados (Teoria) 33/102

## **Flat**
 Devuelve un arreglo nuevo derivado del resultado de eliminar arreglos anidados

 **Convertir arreglos anidados:**

 |[[6,8] | [9,10] | [9,7]]|
   |--|--|--|
    |  0  |   1  |  2  |
-> índices

 **en un solo arreglo:**
 --------------
 |6|8|9|10|9|7|
 |--|---|--|--|--|--|
 |0|1|2| 3|4|5| -> Indices
---------------
```js
 let calificaciones = [[6,8],[9,10],[9,7]];
 let resultado = calificaciones.flat();
 console.log(resultado);
-> [ 6, 8, 9, 10, 9, 7 ]
```
## **Sort**

Regresa un arreglo ordenado basado en una función de comparación
```js
 let arreglo = [1,8,10,0,9,3]
 let resultado = arreglo. sort();
 console.log(resultado)
 -> [ 0, 1, 10, 3, 8, 9 ]
// Vemos que no los ordena en orden númerico, sino como carácteres ASCII

//Para ordenarlos numericamente habría que emplear una función de comparación
 function compare(a,b){
 return a — b;}
```
# Métodos de arreglos avanzados(práctica) 34/102

```js
 const calificaciones = [10, 7, 4, 6, 2, 8];
 const mensajes = ['hola', 'al', 'curso', 'de', 'javascript'];
```

## **foreach (nos permite hacer un recorrido por nuestro arreglo)**

el nombre de los parametros no tiene ninguna importancia, simplemente debe coincidir con la llamada

Hay varias formas de usar forEach

primera:
```js
calificaciones.forEach((elemento, indice)=>console.log(elemento, indice));

-> 10 0
-> 7  1
-> 4  2
-> 6  3
-> 2  4
-> 8  5
```
con otro nombre de parametros:

```js

 calificaciones.forEach((a,b)=>console.log(a,b));
-> 10 0
-> 7  1
-> 4  2
-> 6  3
-> 2  4
-> 8  5
```
segunda:

```js
 function iteracion(elemento, indice){
 console.log(elemento, indice);
 }

 calificaciones.forEach(elemento=> console.log(elemento));
```
## **map nos regresa una arreglo de respuesta**
```js
 const nuevoArreglo = calificaciones.map((elemento, indice) =>{
 return elemento \* 5;
 });

 const nuevoArregloMensajes = mensajes.map(elemento =>{
 return `** ${elemento} **`;
 });

 console.log('calificaciones',calificaciones, 'nuevoArreglo',nuevoArreglo);
-> calificaciones [ 10, 7, 4, 6, 2, 8 ] nuevoArreglo [ 50, 35, 20, 30, 10, 40 ]
 console.log(nuevoArregloMensajes);
-> [ '** hola **', '** al **','** curso **', '** de **','** javascript **']
```
## **reduce permite coger todos los elementos del arreglo y acumularlos en un nuevo valor**
```js
const arregloReduce = calificaciones.reduce (acc, item)=>acc + item);
 
console.log(arregloReduce);
-> 37

const arregloReduceString = mensajes.reduce((acc, item) =>acc + ' ' + item );

console.log(arregloReduceString);
-> hola al curso de javascript
```

# Métodos de arreglos avanzados II(práctica) 35/102

## **Filter.**

crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
```js
const arregloFilter = calificaciones.filter(item => item < 5);
console.log(arregloFilter);
-> [ 4, 2 ]

const arregloFilterString = mensajes.filter(item => item != 'javascript');
console.log(arregloFilterString);
-> [ 'hola', 'al', 'curso', 'de' ]
```
##**Find**
Es parecido a filter, pero regresa unicamente la primera coincidencia
```js
const arregloFind = calificaciones.find(item =>{
return item > 5;
return item == 100;
});
console.log(calificaciones);
console.log(arregloFind);
->[ 10, 7, 4, 6, 2, 8 ]
-> 10
```
##**FindIndex**

const index = calificaciones.findIndex(item =>{
return item === 6;
 });
console.log(index);

##**Some**

regresa un valor booleano true o false
```js
 const existe = mensajes.some(item =>{
   return item === 'javascript';
 });
 console.log(existe);
 -> true
```

# Métodos de arreglos avanzados III (práctica) 36/102

##**flat**

permite aplanar un arreglo
```js
const parciales = [[10, 8], [7,5], [10, 10]];
console.log(parciales.flat());
-> [ 10, 8, 7, 5, 10, 10 ]
const output = [[[[10, 5]]],[2, 8]];
console.log(output.flat(1));
-> [ [ [ 10, 5 ] ], 2, 8 ]
```

##**sort**

El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado
```js
const arregloOrdenado = calificaciones.sort((a, b) =>{
if(a > b) return -1;

if(a < b) return 1;

return 0;
 });

const res02 = mensajes.sort((a, b) =>{
if(a < b) return -1;

if(a > b) return 1;

return 0;
 });

 console.log(arregloOrdenado);
-> [ 10, 8, 7, 6, 4, 2 ]
 console.log(res02);
-> [ 'al', 'curso', 'de', 'hola', 'javascript' ]
```

# Map (teoría) 37/102

La diferencia principal de un mapa con un arreglo, es que en el primero nosotros tenemos que decidir el nombre con el que llamamos a los índices

 
|1|8|10|0|9|3| -> arreglo
|--|--|--|--|--|--|--|
|0| 1| 2| 3| 4| 5|->índice
 


map
|1 | 8 | 10 |0 | 9 | 3 |->Valor
|--|--|--|--|--|--|--|
|Juan| Maria| Sergio| Paula| Ernesto| Lena|->Indice

Para crear un nuevo mapa:
```js
let calificaciones = new Map();
```
Para añadirle elementos usamos el método:
 #### set ####


El método set nos permite ingresar el índice y el valor . Primero escribimos el índice y separado con una coma el valor que corresponde a ese índice
```js
calificaciones.set("juan", "10");

calificaciones.set("alicia", "8");

calificaciones.set("pedro", "6");
```
#### Otros métodos de Map
```js
- get. Nos permite introducir el índice y obtener el valor

calificaciones.get("juan"); // =10

- has. Nos permite saber si un índice existe

calificaciones.has("juan"); // =true

- delete. Nos elimina el elemento y nos devuelve su valor

calificaciones.delete("juan"); //=10

- clear. Elimina completamente los elementos de un mapa

calificaciones.clear("juan");

console.log(calificaciones);
```
# Map (práctica) 37/102
```js
const mapa = new Map();

 mapa.set('juan', 10);
 mapa.set('maria', 4);
 mapa.set('sergio', 3);
 mapa.set('luna', 8);
 mapa.set('harry', 7);

 console.log(mapa);

 console.log(mapa.get("maria"));

 mapa.set("sergio", 6);

 console.log(mapa);
 console.log(mapa.has("luna"));

 for(let elemento of mapa){
 console.log(elemento[0]);
 }
```
# Set (Teoria) 39/102
```js
 let calificaciones= new Set();

 calificaciones.add(10);
 calificaciones.add(8);
 calificaciones.add(5);
 calificaciones.add(10);

 console.log(calificaciones);
```
la diferencia entre set y map, es que set usa el valor como índice del elemento.

Vemos que set no incluye el último valor de 10 porque este ya existía.
Resulta útil usar set cuando queremos hacer un arreglo donde no se repitan los elementos.


 |10|8|5|        -> Valor
 |--|--|--|--|
 |10| 8| 5|      -> Indice 


#### Métodos de set

**entries** etorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.
```js
 let elementos = calificaciones.entries();

 elementos.next().value;

 console.log(elementos);
```

# Set (prácticas) 40/102

```js
 const propiedades = new Set();

 propiedades.add("color");
 propiedades.add("tamano");
 propiedades.add("peso");
 propiedades.add("forma");

 console.log(propiedades);

 propiedades.add("color");

 console.log(propiedades);

 const iterador = propiedades.entries();

 console.log(iterador.next().value);

 for(let item of iterador){
 console.log(item);
 }

```

# Strings (práctica) 41-42/102
```js
 let mensaje = 'Hubo un error al procesar la solicitud';
 console.log(mensaje);

 mensaje = 'b';
 console.log(mensaje);

 mensaje = 'El usuario fue registrado con exito';
 console.log(mensaje[5]);
 console.log(mensaje.length);

 let texto = "Bienvenidos al curso";
 let texto02 = 'Bienvenidos al curso';
 let texto03 = `Bientenidos al curso. // Este es el temario`;
 console.log(texto, texto02, texto03);

 let nombre = 'Marcos';
 let header = 'Tu resumen del dia, ' + nombre;
 let header02 = `Tu resumen del dia, ${nombre}`;

 console.log(header, header02);

 const nombre01 = 'Oscar';
 const nombre02 = 'oscar';
 console.log(nombre01 == nombre02);
```
```js
 mensaje = "Curso de Javascript para principiantes";

#### indexof
 console.log(mensaje.indexOf('javascript'));
 console.log(mensaje.indexOf(' '));/ console.log(mensaje.indexOf('php'));

#### lastIndexOf
console.log(mensaje.lastIndexOf('a'));
 console.log(mensaje.lastIndexOf('ip'));

#### slice
 let res = mensaje.slice(5, 10);
 console.log(res);

#### substr
 res = mensaje.substr(5,5);
 console.log(res);

#### replace
 res = mensaje.replace('Javascript', '.NET');
 console.log(res, mensaje);

#### toUpperCase
res = mensaje.toUpperCase();
console.log(res);

#### lowercase
 res = mensaje.toLowerCase();
 console.log(res);

#### concat
 let primerNombre = 'Juan ';
 let segundoNombre = 'Camilo ';
 let apellido = 'Garcia ';

 let nombreCompleto = primerNombre.concat(segundoNombre, apellido);
 console.log(nombreCompleto);

#### trim
 let respuestaHTTP = ' transaccion exitosa ';
 console.log(respuestaHTTP);
 console.log(respuestaHTTP.trim());

#### split
 const mensajeError = 'Busqueda no devolvio respuestas';
 console.log(mensajeError.split(' '));
 console.log(mensajeError.split(''));
```

# Objetos (teoría) 43/102

 Los objetos tienen llaves, clave y valor

 {
 clave :valor
 }

## **arreglos de objetos**

 [
 {clave :valor}
 {clave :valor}
 {clave :valor}
 {clave :valor}
 {clave :valor}
 ]

## **Definir un objeto: Hay dos formas de definirlo**
#### Primera forma de definirlo
```js
 let isabelle= new Object();

 isabelle ['altura ']= 150;
 isabelle ['color—pelo']= "amarillo";
 isabelle ['velocidad']= "lento";
```
#### La segunda forma de definirlo es la que habitualmente se usa por ser más ágil visualmente
```js
 let isabelle={
 altura: 150,
 color_pelo: "amarillo" ,
 velocidad: "lento",
 feliz: true,
 chaleco: {
 color: "verde"}
 };
```
#### Como acceder a las propiedades
```js
 isabelle.altura //150
 ó
 isabelle["velocidad"] //lento
```
Para acceder a las propiedades de un objeto que está dentro de nuestro objeto
```js
 isabelle.chaleco.color //verde
 ```
#### Para acceder a un arreglo de objetos
```js
 let personajes=[
 {altura:150,
 color_pelo: "amarillo",
 chaleco:{
 color: "verde"
 }
 },
 {altura:140,
 color_pelo: "cafe",
 chaleco:{
 color: "azul"
 }
 },
 {altura:160,
 color_pelo: "blanco",
 chaleco:{
 color: "undefined"
 }
 }
 ]

 console.log(personajes[1]);
 -> { altura: 140, color_pelo: 'cafe', chaleco: { color: 'azul' } }

 console.log(personajes[1].chaleco.color);
 -> azul
```
# Objetos (prácticas) 44/102
```js
 let objeto = {
 nombre: 'Marcos',
 edad: 28,
 habilidades: ['programacion', 'dibujo', 'baile'],
 frances: false
 };

 console.log(objeto);
 console.table(objeto);

 let post = {
 fecha: '2020/12/12',
 titulo: '5 trucos VS Code',
 author: {
 nombre: 'Juanito',
 photo: 'img/photo.jpg',
 },
 comentarios: [
 {
 id: 1,
 texto: 'Buen contenido'
 },
 {
 id: 2,
 texto: 'No conocia el truco #2'
 }
 ]
 };

 console.log(post);
 console.log(post.comentarios);
 post.author.nombre = 'Laura';
 console.log(post);
 console.log(post.comentarios[0], post['comentarios'][0]);
 console.log(post.comentarios[0].texto, post['comentarios'][0]['texto']);

 post['likes'] = 56;

 console.table(post);
 console.log(post.shares);

- for...in sirve exclusivamente para objetos

 for(propiedad in post){
 console.log(propiedad);
 }
```

# Métodos de objetos (teoría) 45/102
```js
 let kk = {
 altura: 160,
 color_pelo: "blanco" ,

 }

- Como añadimos un método, por ejemplo cantar

 let kk = {
 altura: 160,
 color_pelo: "blanco" ,
 cantar: function(){
 return "guau";
 }

 };

 console.log(kk.cantar());
 ->guau
```

# Métodos de objetos (práctica) 46/102
```js
 const usuario = {
 id: 5,
 nombre: 'Sarah',
 edad: 38,
 saludo: function(){
 return `Hola! es un gusto que nos visites`;
 }
 };

 console.log(usuario.saludo());

 const viaje = {
 tiempo: function(distancia, velocidad){
 return distancia / velocidad;
 }
 };

 console.log(viaje.tiempo(40, 60));

 const viaje02 = {
 distancia: 40,
 velocidad: 60,
 tiempo: function(){
 return this.distancia / this.velocidad;
 }
 };

 console.log(viaje02.tiempo());
 -> 0.6666666666666666
```

# Como funciona this (teoría) 47/102

**this**.Hace referencia al objeto que lo contiene
pero el valor depende de cómo se use

 En este ejemplo this hace referencia al objeto que lo contiene
 Se ve mucho en las clases y la POO

En un objeto **this** hace referencia al
 mismo objeto, con el cual se puede
 acceder a sus propiedades y métodos
```js
 let post={
 likes: 160,
 getLikes: function(){
 return this.likes `likes`;
 }
 };
 console.log(post);
```
 **this** en una función o en un contexto
 donde se manda a llamar sin estar en
 ningún objeto representa al objeto Global
```js
 function prueba(){
 return this;
 };
```
 **this** cuando se usa en eventos contiene al elemento HTML que activó el evento
```js
 button addEventListener("click", function(e)
 {console. log(this);});
```
 **this** no existe bajo el contexto de las funciones de flecha, por lo tanto al querer obtener la propiedad regresará undefined
this por si solo en una función de flecha hace referencia al objeto Global

# Como funciona this (práctica) 48/102
```js
 let edad = 10;
 let nombre = 'John';

 this.nombre = 'Jessica';
 this.edad = 40;

 const usuario = {
 id: 5,
 nombre: 'Sarah',
 edad: 38,
 saludo: function(){
 return `Hola ${this.nombre}!`;
 },

 getEdad: function(){
 return this.edad;
 }
 };

 console.log(usuario.saludo());
 console.log(usuario.getEdad());
 console.log(this);
```
# Call, apply y bind (prácticas) 49/102

 Estos tres métodos buscan poder asociar un objeto a this
```js
 const user={
 name: 'Marcos'
 };
 const business ={
 name: 'Headbook'
 };
 function showInfo( likes, friends){
 return `${this.name} tiene ${likes} likes y ${friends} amigos`;
 }

 console.log(showInfo(10,5));
 -> undefined tiene 10 likes y 5 amigos
 -> No devuelve el name porque no sabe a cual de los dos objetos
 debe aplicar la llamada

 console.log(showInfo.call(business, 4, 8));
-> Headbook tiene 4 likes y 8 amigos
 console.log(showInfo.apply(user, [5, 9]));
 -> Marcos tiene 5 likes y 9 amigos
```
 la diferencia entre call y apply es que la última tenemos que escribir los parámetros como un array

 bind lo que hace es lo mismo asociar el contexto pero regresar de una función  para poder ejecutarla
```js
 const newfunction = showInfo.bind(user);
 console.log (newfunction(10,15));
```
# Desestructuracion (Teoría) 50/102

 Desestructuración
 Forma de extraer las propiedades de un objeto y asignarlas a variables

 Nos permite separar en variables las propiedades de un objeto

#### Desestructurar un objeto
```js
 let kk={
 altura: 160,
 color_pelo: "blanco"
 };
 let {altura, colorPelo}=kk;
 Nombre de variables
```
#### Desestructurar un arreglo de objetos
```js
 let personajes=[
 {
 altura: 150,
 color_pelo: "amarillo",
 chaleco: {
 color: "verde"}
 },
 {
 altura: 100,
 color_pelo: "cafe",
 chaleco: {/ color: "azul"}
  },
 {
 altura: 160,
 color_pelo: "blanco",
 chaleco: {
 color: undefined
 }
 }

 ]

 let [isabelle, nook ,kk] = personajes;

 isabelle.altura;
 nook.color_pelo ;
 kk.chaleco.color;

 console.log(isabelle.altura);
 //-> 150
 console.log(nook.color_pelo);
-> cafe
 console.log(kk.chaleco.color);
-> undefined
```
# Desestructuracion (prácticas) 51/102
```js
 const usuario = {
 id: 5,
 nombre: 'Sarah',
 edad: 38,
 habilidades: [
 {
 id: 0,
 nombreHabilidad: 'programacion'
 },
 {
 id: 1,
 nombreHabilidad: 'canto'
 }
 ]
 };

 const idUsuario = usuario.id;
 const nombreUsuario = usuario.nombre;
 const habilidad01 = usuario.habilidades[0].nombreHabilidad;

 console.log(idUsuario, nombreUsuario, habilidad01);
-> 5 Sarah programacion
 const { id, nombre, habilidades} = usuario;
 console.log(id, nombre, habilidades);
 5 Sarah [
 { id: 0, nombreHabilidad: 'programacion' },
 { id: 1, nombreHabilidad: 'canto' }
 ]

 const {nombreHabilidad} = habilidades[0];
 console.log(nombreHabilidad);
-> programacion

 -> 5 Sarah [
 { id: 0, nombreHabilidad: 'programacion' },
 { id: 1, nombreHabilidad: 'canto' }
 ]

 const elementos = [
 {id: 0, nombre: 'KK'},
 {id: 1, nombre: 'Canelita'},
 {id: 2, nombre: 'nook'}
 ];

 const [ kk, canelita, nook] = elementos;
 console.log(kk, canelita, nook);
 -> { id: 0, nombre: 'KK' } { id: 1, nombre: 'Canelita' } { id: 2, nombre: 'nook' }
```
# Introducción al DOM (Teoría) 52/102

**DOM son las siglas de Document Object Model y es una interfaz de programación que nos permite crear, cambiar o remover elementos del documento. También podemos agregar eventos a esos elementos para hacer nuestra página más dinámica.**


 Podríamos decir que el DOM es la representación gráfica en forma de árbol de como está estructurada nuestra aplicación web (HTML)

 Podríamos representar el DOM a través de este ejemplo

## **Document Object Model**
```js
 (1)   |main|
     -----------
 (2) |div| |div|
 (3) |img| | a |
          |texto|
```          
 Cada uno de estos elementos lo vamos a llamar Nodo
 Pero un Elemento está vinculado a una etiqueta HTML. Por eso, texto dentro del hipervínculo sería un Nodo, pero no un Elemento

 (1) Nodo padre

 (2) Nodos hijos de main y padres de img y a. Ambos div son hermanos

 (3) Nodos hijos de div y nietos de main

 Vamos a tomar este ejemplo:

 Hay dos métodos para hacer referencia a cada uno de estos elementos a través de JS

#### Método tradicional
```js
 getElementById("elemento") // por id
 getElementByTagName("elemento") // por etiqueta
 getElementByClassName("elemento") // por nombre
```
#### Método moderno

 **querySelector("elemento")** // Se puede llamar a clases, id, etiqueta
 **querySelectorAll(".item")** // Selecciona a todos los elementos que tengan clase .item

 **header.children** // Nos devuelve una colección de elementos, que se llama NodeList, que contiene todos sus hijos

 **logo.parentNode** // Nos devuelve el padre del elemento logo
 **logo.nextElementSibling** // nos devuelve los hermanos de logo


----------------------------------------
|Resumen: Métodos de acceso del DOM      |
---------------------------------------- |     |
|getElementById(id)                      |
|getElementsByClassName(nombreDeClase)   |
|getElementsByTagName(nombreDeEtiqueta)  |
|querySelector(selectorCss)              | 
|querySelectorAll(selectorCss)           |
-----------------------------------------


Puedes seleccionar elementos en JavaScript usando métodos como  
```js
getElementById(), querySelector(), y querySelectorAll().
```
Si quieres agregar nuevos elementos al documento puedes hacerlo con  
```js
document.createElement().
```
También puedes cambiar los estilos en línea de CSS   de los elementos usando la propiedad  
```js
style.
```
Si deseas agregar eventos a elementos como botones, puedes usar el 
```js
addEventListener().
```
# Introducción al DOM (práctica) 53/102

## **Modificación de atributos**
Los atributos son valores que contienen información adicional sobre elementos HTML. Normalmente vienen en pares de nombre y valor, y pueden ser esenciales según elemento.

Algunos de los atributos HTML más comunes son el atributo src de una etiqueta img, el href de una etiqueta a, class, id y style. Para obtener una lista completa de atributos HTML, consulte la lista de atributos en la Mozilla Developer Network. Los elementos personalizados que no formen parte del estándar HTML se prefijarán con data.

En JavaScript, tenemos cuatro métodos para modificar atributos de elementos:

|Método	            |Descripción	                                                    |Ejemplo                                     |
|--|--|--|
|                                                                                                                                  |
|hasAttribute()	    |Muestra un booleano true o false.	                              |element.hasAttribute('href');               |
|getAttribute()	    |Muestra el valor de un atributo especificado o null.	            |element.getAttribute('href');               |
|setAttribute()	    |Agrega o actualiza el valor de un atributo especificado.	        |element.setAttribute('href', 'index.html'); |
|removeAttribute()  |Elimina un atributo de un elemento.	                            |element.removeAttribute('href');            |

## **Modificación de clases**

 El atributo de class corresponde a los selectores de clase de CSS. No se debe confundir con las clases ES6, un tipo especial de función de JavaScript.

 Las clases CSS se utilizan para aplicar estilos a varios elementos, a diferencia de los ID que solo pueden existir una vez por página. En JavaScript, contamos con las propied className y classList para trabajar con el atributo de clase.

|Método/Propiedad 	   |Descripción	                                                      |Ejemplo                                   |
|--|--|--|
|className	           |Obtiene o establece un valor de clase.	                          |element.className;                        |
classList.toggle()	   |Activa o desactiva una clase.	                                    |element.classList.toggle('active');       |
classList.toggle()     |	   Activa o desactiva una clase.	                              |element.classList.toggle('active');       |
classList.toggle()	   |Activa o desactiva una clase.	                                    |element.classList.toggle('active');       |
|classList.add()	     | Agrega uno o más valores de clase.	                              |element.classList.add ('active');         |
classList.toggle()	   |Activa o desactiva una clase.	                                    |element.classList.toggle('active');       |         
classList.contains()   |Comprueba si el valor de clase existe.	                          |element.classList.contains('active');     |
classList.replace()	   |Sustituye un valor de clase existente por uno nuevo.	            |element.classList.replace('old', 'new');  |
classList.remove()	   |Elimina un valor de clase.	                                      |element.classList.remove('active');       |

#### diferencia del ejemplo de className, al utilizarse classList.add() se añadirá una nueva clase a la lista existente. También puede agregar varias clases como cadenas separadas por comas. También es posible utilizar setAttribute para modificar la clase de un elemento.

####   Una opción para editar los estilos es setAttribute().

// Select div
```js
const div = document.querySelector('div');

// Apply style to div
div.setAttribute('style', 'text-align: center');
```


#### Sin embargo, esto eliminará todos los estilos alineados existentes del elemento. Debido a que este probablemente no sea el efecto deseado, es mejor utilizar el atributo style directamente.
```js
div.style.height = '100px';
div.style.width = '100px';
div.style.border = '2px solid black';
```
#### Las propiedades de CSS se escriben en kebab-case, que son palabras minúsculas separadas por guiones. Tenga en cuenta que las propiedades de CSS de kebab-case no se pueden utilizar en la propiedad de estilo de JavaScript. Se sustituirán por su equivalente en camelCase, en el cual la primera palabra se escribe con minúscula y las siguientes con mayúsculas. En otras palabras, en vez de text-align utilizaremos textAlign para la propiedad de estilo de JavaScript.

#### Make div into a circle and vertically center the text
```js
div.style.borderRadius = '50%';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';

```



```js
 const logo = document.getElementById('logo');
 const logov2 = document.querySelector('#logo');

 console.log(logo);
 console.log(logov2);

 const item = document.getElementsByClassName('item');
 const itemv2 = document.querySelectorAll('.item');

 console.log(item);
 console.log(itemv2);

 console.log(Array.isArray(item), Array.isArray(itemv2));
 -> Array.isArray nos devuelve si item e itemv2 son arreglos
 -> El resultado es: false false

 console.log(Reflect.has(item, 'forEach'), Reflect.has(itemv2, 'forEach'));
 -> Reflect.has son permite validar si un objeto tiene un método específico
 -> Nos devuelve false true. Significa que item no puede ejecutar forEach, pero itemv2 si

 console.log(Reflect.has(item, Symbol.iterator), Reflect.has(itemv2, Symbol.iterator));
-> Valida si una variable es un Iterador.
-> Devuelve true true

 item.forEach(element => {
 console.log(element);
 });

**Aplicando for...of podemos iterar tanto item como itemv2**

 for(elemento of item){
 console.log(elemento);
 }

 for(elemento of itemv2){
 console.log(elemento);
 }
```
 De forma general vamos a estar utilizando querySelector tanto para obtener Id como para obtener Iteradores, porque se hace mucho más cómodo
```js
 const arregloItem = Array.from(item);
 const arregloItemv2 = Array.from(itemv2);

 console.log(arregloItem, arregloItemv2);

 const links = document.getElementsByTagName('a');
 const linksv2 = document.querySelectorAll('a');

 console.log(links, linksv2);
```
# Navegación por el DOM (prácticas) 54/102
```js
 const header = document.querySelector("header");

 const hijosHeader = header.children;
```
## **hijos**
```js
console.log(hijosHeader);
console.log("hijos", header.children, header.childNodes);
-> HTMLCollection(2) [div#logo, ul, logo: div#logo] NodeList(5) [text, div#logo, text, ul, text]
```
## **padre**
```js
 console.log('padre', logo.parentElement, logo.parentNode);
 -> Nos devuelve el mismo HTML
```
## **hermanos**
```js
 console.log("hermanos", logo.parentElement.children, logo.nextElementSibling);
 -> parentElement.children sube al padre para obtener los hijos,  
 -> nextElementSibling devuelve los hermanos sin contar el elemento inicial con el que estamos trabajando
```
# DOM Modificar propiedades de elementos (Teoria) 55/102
```js
 const imagen = document.querySelector("#portada");
```
 Con el método setAttribute podemos modificar sus propiedades. Tambien podemos hacerlo llamando a imagen.width
```js
 imagen.setAttribute("width", "200");
 imagen.width = "200";
```
 Para acceder a la propiedad de un objeto, podemos usar también dos propiedades:
```js
 imagen.width;
 imagen.getAttribute("height");
```
 Obtener el texto que contiene un elemento HTML
```js
 const button= document.querySelector("#boton")
```
 Para cambiar el texto
 ```js
 imagen.textContent = "nuevo texto"
```
 Para ver el contenido del texto
```js
 imagen.textContent;
```
# DOM Modificar propiedades de elementos (práctica) 56/102
```js
 const foto = document.querySelector("#foto");

 console.log(foto.width, foto.getAttribute("width"));
 console.table([
 {
 medida: foto.width,
 tipo: typeof foto.width,
 },
 {
 medida: foto.getAttribute("width"),
 tipo: typeof foto.getAttribute("width"),
 },
 ]);

 foto.width = 500;
 foto.setAttribute("width", "100%");

 const boton = document.querySelector("#boton");

 boton.textContent = "Monarquía bananera";
 boton.setAttribute ('class', 'boton-principal');
 console.log(foto);
```
# DOM Modificar estilos de elementos (Teoria) 57/102

 También podemos modificar los estilos de nuestro HTML que son parte del DOM

 ## **Mi botón**
```js
 boton.style.backgroundColor= "blue";
 ->modifica el color de fondo del botón

 boton.style.color = "white";
 -> modifica el color del texto

 boton.style.paddingLeft = "40";
 -> Modifica la alineación del texto dentro del botón

 boton.Style.backgroundlmage = "url(imagen.jpg)";
 -> modifica la imagen de fondo del botón
```
## **Modificar clases**

 Este div contiene tres class. Podemos materializar estas clases como si fueran un conjunto
```js
<div id="capa" class="container bg—red fs-14">
-> |container| bg-red | fs-14 |

 capa. classList.remove("un-estilo") ;
 -> Elimina un estilo

 capa.classList.replace("container", "estilo—nuevo") ;
 -> Nos permite cambiar un estilo por otro nuevo
 -> |estilo-nuevo| bg-red | fs-14 |

 capa.classList.toggle("panel") ;
 -> Nos permite comprobar si un estilo ya existe y si no, lo añade
 -> |estilo-nuevo| bg-red | fs-14 |panel |

 capa.classList.contains ("fs-14");
 -> Nos devuelve true si el nombre de clase existe y false en caso contrario
```
# Modificar estilos de elementos (práctica) 58/102
```js
 const boton = document.querySelector('#boton');

 boton.style.backgroundColor = 'blue';
 boton.style.color = '#fff';
 boton.style.paddingLeft = '50px';
 boton.style.paddingTop = '50px';
 boton.style.background = 'linear-gradient(270deg, rgba(45,90,83,1) 0%, rgba(98,193,178,1) 100%)';

 const boton02 = document.querySelector('#boton02');

 boton02.classList.add("boton");
 boton02.classList.add('boton-estilo01');
 boton02.classList.remove('boton');
 boton02.classList.toggle('boton-estilo02');

 console.log(boton02.classList);
 console.log(boton02.classList.contains('boton-estilo01'));
```
# DOM Crear y eliminar elementos (Teoría) 59/102
```js
             DOM

             main
      ---------------------
     | div |           | div |      | Crear elemento|
     | img |           | a   |      -----------------
     |     |           |texto|           |section|
```
#### Crear elementos HTML
```js
- Creamos el elemento
const elemento = document.createElement ("section") ;
- Lo adjuntamos al DOM.
- Creamos una id
elemento.setAttribute("id", "nuevoElemento");
- Hacemos referencia al padre creando una constante
const main = document.querySelector("main");
- con append lo incluimos al final de los elementos hijos de main.Nos permite crear tanto elementos como nodos de texto
main.append(elemento);
- si queremos incluirlo al principio
main.prepend(elemento);

- Hay un tercer método que unicamente nos permite crear elementos HTML
main.appendChild(elemento);

- Estas son las diferencias entre Element.append() y Node.appendChild(): Element.append() permite agregar cadenas mientras que Node.appendChild() solo acepta objetos Node. Element.append() no tiene valor de retorno mientras que Node.appendChild() devuelve el objeto Node adjunto. Element.append() permite agregar varios nodos y cadenas, mientras que Node.appendChild() solo permite agregar un nodo.
```
## **Varios elementos a la vez**

#### Varios elementos a la vez con append
```js
 const title= document.createElement("h1");
 const photo = document.createElement("img") ;
 const link= document.createElement( "a" )

 const container = document.createElement("#container") ;

 container.append(title, photo, link, "welcome");
```
#### Varios elementos a la vez con appendChild
```js
 const container =document.createElement("#container");

 const text = document.createTextNode("welcome") ;
 const title= document.createElement("h1");
 const photo = document.createElement("img") ;/ const link= document.createElement( "a" )

 container.appendChild (title) ;
 container.appendChild(photo) ;
 container. appendChild(link) ;
 container. appendChild (text) ;
```

#### Eliminar elementos
```js
          main
    
 |div#photo | |div#links|  
 |img |          | a |
                | texto |
```
#### Eliminar elementos completos
```js
 links.remove();
```
- Si eliminamos la capa links, tambien quedan eliminados los hijos a y texto

#### Si por ejemplo queremos eliminar el hipervínculo (a), podemos hacer uso de removeChild
```js
 links.removeChild(links.ChildNodes[0]);
                                   (1)

 (1) objeto a eliminar
```

```js
 Resumen y ejemplo de crear elementos con .appendChild


 El método .appendChild() agrega un elemento HTML como "elemento secundario" de otro.

 El argumento del método es el elemento que se agrega. El nodo antes del punto . es el elemento que contendrá el nuevo nodo.

 CÓDIGO DE EJEMPLO
 let newNode = document​.createElement('p');
 newNode​.textContent = 'some words';
 document​.body​.appendChild(newNode);
 El newNode es un elemento HTML p. Tiene 'some words' como su .textContent. El newNode se agrega al elemento body. Si hay otros nodos dentro del body, el newNode será el último en la lista.

```



# DOM Crear elementos HTML (prácticas) 60/102

```js
const body = document.querySelector("body");
const container = document.createElement("div");
container.id = "mainContainer";
container.style.backgroundColor = "#003366";
container.style.color = "white";
container.style["padding"] = "50px";
container.textContent = "Bienvenidos al curso";

body.appendChild(container);

const texto = document.createTextNode(" de Javascript");
container.append(texto);
//append nos permite agregar un numero ilimitado de elementos y además poder incluir texto directamente, al contrario que con appendChild
console.log(container.textContent);

const link = document.createElement("a");
link.setAttribute("href", "http://www.google.com");
link.textContent = "Ir a Google";

container.prepend(link, " ");
```

# DOM eliminar elementos en HTML (prácticas) 61/102

Tomamos como referencia el ejercicio del capitulo anterior
```js
const html = `
<div class="container">
        <ul id="lista">
            <li id="item-home">
                <a href="#" id="link-home">Home</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>
`;

document.querySelector("body").innerHTML = html;

const lista = document.querySelector("#lista");
const itemHome = document.querySelector("#item-home");
const linkHome = document.querySelector("#link-home");

//linkHome.remove();
//itemHome.remove();
lista.removeChild(itemHome);
```

# DOM Eventos (Teoría) 62/102

Es la forma en que podemos interactuar con el usuario a través de alguna acción realizada por el mismo.

Ejemplos de eventos

 - Cuando la página web termina de cargar
 - Al hacer scroll
 - Cuando el contenido de un campo de texto cambia
 - Cuando se da clic en un botón
 - Cuando se presionan las teclas de teclado

 Se pueden escribir de dos formas. La primera a través de HTML aunque no es muy recomendada
```js
<button onclick(1) = "saludo()(2); "> Presiona aquí </button>
(1) Evento declarado en el elemento
(2) Función Javascript a llamar
```
 La segunda forma es a través de addEventListener, que es la recomendada
```js
boton.addEventListener(1)("click"(2), function(e){}(3));
(1) permite definir un nuevo evento al elemento
(2) nombre del evento
(3) función a ejecutar, puede ser anónima o definida
```
#### ¿Cuantos eventos hay?

- Offline
 -Onabort
- onafterprint
- onbeforeonload
- onbeforeprint
- onblur
- oncanplay
- oncanplaythrough
- onchange
- oncltck
- oncontextmenu
- ondblclick
- ondrag
- ondragend
- ondragenter
- ondragleave
- ondragover
- ondragstart
- ondrop
- ondurationchange
- onemptied
- onended
- onerror
- onfocus
- onformchange
- onforminput
- onhaschange
- oninput
- oninvalid
- onkeydown
- onkeypress
- onkeyup
- onload
- onloadeddata
- onloadedmetad
- ata
- onloadstart
- onmessage
- onmousedown
- onmousemove
- onmouseout
- onmouseover
- onmouseup
- onmousewheel
- onoffline
- onoine


# DOM eventos (práctica) 63/102
```js
function mostrarMensaje(){
    console.log('Este es un evento en línea');
}

mostrarMensaje();

 const boton = document.querySelector('#boton');

 let contador = 0;

  boton.addEventListener('click', function(e){
    console.log(e);
    contador++;

     e.target.textContent = `${contador} clicks`;
  });

document.querySelector('#respuesta').textContent = 'Texto dinamico desde un boton';
contador++;
e.target.textContent = `${contador} clicks`;

document.querySelector('#capa').classList.toggle('ocultar');

document.querySelector('body').addEventListener('mousemove', e =>{
    document.querySelector('#respuesta').textContent =`${e.pageX} - ${e.pageY}`;
  });

const edificio = document.querySelector('#edificio');
let pegado = false;
window.addEventListener('mousemove', e =>{
    if(pegado){
        const x = e.pageX - (edificio.width / 2);
        const y = e.pageY - (edificio.height / 2);
        edificio.style.position = "absolute";
        edificio.style['left'] = x + 'px';
        edificio.style['top'] = y + 'px';
    }
});

edificio.addEventListener('click', e =>{
    pegado = !pegado;
});
```

# DOM Formularios (Teoria) 64/102

los formularios son una parte importante porque prácticamente a partir de formularios es que creamos aquellas secciones en donde el usuario tiene la interactividad es decir a partir de los formularios es que por ejemplo los usuarios pueden utilizar campos de texto para ingresar contenido. Pueden utilizar botones check boxes radio bottons listas para seleccionar opciones etcétera entonces una parte importante de los eventos en el domes conocer cómo manipular los elementos que están específicamente creados para la interacción con el usuario. Vamos a ver cómo manipular estos cuatro elementos: 
```js
<input>
<select>
< textarea>
<button>
```
Realmente si nosotros empezamos a agrupar la funcionalidad vemos que tenemos los inputs, el texto, el password, el ,  el radio botón y el submit todos funcionan de la misma forma, el comportamiento es exactamente el mismo por ejemplo.
```js
Text y textarea
-------------
|Hola        |
-------------
campo.value = Hola
```
Si tenemos un texto o un textarea podemos hacer referencia a su valor a través de la propiedad value (campo punto value) y eso nos va a regresar lo que tiene ese campo de texto lo que haya ingresado el usuario o podemos también hacer referencia y agregarle contenido Dinámico. Por ejemplo value es igual a curso de avascript Y eso va a aparecer en el elemento.
```js
Checkbox
--------- ----
|CAMPO   |    |
--------- ----
campo.checked = false
```
Los checkbox tienen la propiedad check el cual me va a regresar falso o verdadero si el check Box está activado o no por ejemplo aquí me diría que es falso pero cuando le doy clic y se activa me va a regresar que es verdadero.
```js
Checkbox
name= "country"

| X|China|
|  |Italia|
|  |México|
| X|India|

const checkboxes= document.querySelectorAll("input[name='country']:checked");
```
Qué pasa con la colección de checkbox Por ejemplo si yo tengo una colección de checkbox en las que quiero marcar los países seleccionados yo voy a hacer referencia a través de document.querySelectorAll pero siempre teniendo como referencia que checkbox deben de tener el mismo nombre el mismo nombre pero el valor diferente entonces voy a hacer referencia con este selector que es input y luego entre corchetes así como lo hacemos en css names igual a Contry 2 puntos check  e nodos los cuales ya vimos Cómo manejar para poder extraer cada uno de los valores y eso pues ya empezar a manejarlos con la lógica que nosotros necesitemos aplicar. Por ejemplo podemos aplicar un forEach y para cada checkbox imprimir el valor checkbox punto value aquí seguimos utilizando la propiedad value Porque como les decía para estos inputs el value me va a regresar el valor que contiene el elemento.
```js
checkboxes.forEach(checkbox =>{console.log (checkbox . value);
```
De la misma forma funcionan los radiobottons tienen la propiedad check la cual me va a regresar falso si no está activado verdadero si está activado de la misma forma también cuando tenemos un conjunto de check boxes con el mismo nombre en este caso country volvemos a hacer el mismo procedimiento cuánticator all input name country 2 puntos check fíjense que es exactamente lo mismo que utilicemos check boxes O radiobots solamente que la funcionalidad del radio botón hace que no se seleccione más de uno sino solamente uno dentro del conjunto después puedo aplicar el mismo forEach para hacer una iteración o un recorrido y mostrar el valor de cada uno de los elementos.

Con los botones cuando yo defino input type botón o submit puedo obtener el valor de Ese botón con un campo punto value o puedo asignarle un valor enviar.
Cuando pasamos a las listas o al Select igual tenemos el campo punto value el cual me va a regresar el elemento o el valor del elemento seleccionado.
```js
campo.options= [Manzana, Pera, Naranja]
//Nos regresa un arreglo con los elementos que tiene esa lista.

const opcion= document.createElement("option");
opcion.text = "Duranzo"
campo.add(opcion);
//Nos permite añadir un nuevo elemento a la lista

campo.remove(1);
//Podemos eliminar un elemento, usando el índice para llamarlo
```

# DOM Formularios input text, checkbox, radio, select (práctica) 65-68/102
```js
let respuestas = {
    nombre: '',
    lenguajes: [],
    nivel: '',
    pais: ''
};

const boton = document.querySelector('#boton');

boton.addEventListener('click', e =>{
    e.preventDefault();
    console.log(respuestas);
    const respuesta = document.querySelector('#respuesta');
     respuesta.innerHTML = '';
     for(prop in respuestas){
         respuesta.innerHTML += `${prop}: ${respuestas[prop]}<br/>`;
     }
});

// //input

 const nombre = document.querySelector('#nombre');
 nombre.addEventListener('input', e =>{
     respuestas.nombre = nombre.value;
 });

const lenguajes = document.querySelectorAll('input[type=checkbox]');
lenguajes.forEach(lenguaje =>{
    lenguaje.addEventListener('click', e =>{
        getLenguajes();
    });
});

//checked

function getLenguajes(){
    respuestas.lenguajes = [];
    const items = document.querySelectorAll('input[type=checkbox]:checked');
    items.forEach(item =>{
        respuestas.lenguajes.push(item.value);
    });
}

// //radios

const niveles = document.querySelectorAll('input[type=radio]');
niveles.forEach(nivel =>{
    nivel.addEventListener('click', e =>{
        respuestas.nivel = e.target.value;
    });
});

//select

const pais = document.querySelector('#pais');
pais.addEventListener('change', e =>{
    respuestas.pais = e.target.value;
});

//select añadir

const bPais = document.querySelector('#bPais');
bPais.addEventListener('click', e => {
    e.preventDefault();
    const texto = document.querySelector('#itPais').value;
    const option = document.createElement('option');
    option.value = texto;
    option.text = texto;
    pais.add(option);
});
```

# DOM Slider de imágenes 69/102
```js
const bPrev = document.querySelector("#bPrev");
const bNext = document.querySelector("#bNext");
const items = document.querySelectorAll("#slider-container .item");
 let index = 0;
 const total = items.length - 1;

 showItem(index);
// console.log(items);
bPrev.addEventListener("click", (e) => {
   if (index > 0) {
     index--;
     hideItems();
     showItem(index);
   }
  // console.log('anterior');
});

bNext.addEventListener("click", (e) => {
   if (index < total-1) {
     index++;
     hideItems();
     showItem(index);
   }
  // console.log('siguiente');
});

 function showItem(index) {
   items[index].classList.add("item-active");
 }

 function hideItems() {
   items.forEach((item) => {
     item.classList.remove("item-active");
   });
 }
```

# Ejercicios. acordeón  70/102

```js
 const items = document.querySelectorAll(".acordeon .item .header button");

 items.forEach((item) => {
   item.addEventListener("click", (e) => {
     const content = e.target.parentElement.nextElementSibling;
     content.classList.toggle("show");
   });
 });
```
# Ejercicios. calculadora 71/102
```js
 const buttons = [
                    ['C', '^', '%', '/'],
                    ['7', '8', '9', '*'],
                    ['4', '5', '6', '-'],
                    ['1', '2', '3', '+'],
                    ['+/-', '0', '.', '='],
                ];
let calculo = {
    operacion: '',
    memoria: undefined,
    numero: 0,
    resuelto: false,
    agregarDigito: function(n){
         if(this.resuelto){
             this.resuelto = false;
             this.numero = parseFloat(''.concat(n));
         }else{
             this.numero = parseFloat(''.concat(this.numero, n));
         }

     },
    agregarOperacion: function(op){
         const {memoria, numero, operacion } = this;

         if(numero == 0 && memoria == undefined) return false;
         if(operacion == ''){
             this.operacion = op;
             this.memoria = this.numero;
             this.numero = 0;
          }else{
              this.numero = this.resolver();
              this.resuelto = true;
          }
         console.log(this);
     },
    agregarFuncion: function(op){
         switch(op){
             case '=':
                 const res = this.resolver();
               this.agregarFuncion('C');
                 this.numero = res;
             break;
             case 'C':
                 this.numero = 0;
                 this.operacion = '';
                 this.memoria = undefined;
                 this.resuelto = true;
             break;
           case '.':
                 if(!esFlotante(this.numero)){
                     console.log('no es flotante');
                     this.numero = this.numero + '.';
                 }else{
                     this.numero = this.numero.toString().replace('.','');
                 }
             break;
         }
         // console.log(this);
     },
    resolver: function(){

         switch(this.operacion){
             case '+': return this.suma();
             case '-': return this.resta();
             case '*': return this.multiplicacion();
             case '/': return this.division();
             case '%': return this.porcentaje();
             case '^': return this.exponente();
             default:
                 console.log('no identificado');
         }
     },
    render: function(elemento){
         elemento.textContent = this.numero;
     },
    suma: function(){
         return this.numero += this.memoria;
     },
    resta: function(){
         return this.memoria -= this.numero;
     },
    multiplicacion: function(){
         return this.numero *= this.memoria;
     },
    division: function(){
         return this.numero /= this.memoria;
     },
    porcentaje: function(){
         return this.numero %= this.memoria;
     },
    exponente: function(){
         return this.numero **= this.memoria;
     }
};

const display = $('#display');
const botonesContainer = $('#botones-container');

for(fila of buttons){
    for(celda of fila){
        const boton = document.createElement('button');
        boton.textContent = celda;
        boton.addEventListener('click', e => {
            const caracter = e.target.textContent;

            if(esNumero(caracter)){
                calculo.agregarDigito(caracter);
            }else if(esFuncion(caracter)){
                calculo.agregarFuncion(caracter);
            }else{
                calculo.agregarOperacion(caracter);
            }
            calculo.render(display);
        });
        botonesContainer.appendChild(boton);
    }
}

function esNumero(n){
    return !isNaN(n);
}

function esFlotante(n){
    if(n.toString().indexOf('.') > -1){
        return true;
    }else{
        return false;
    }
}

function esFuncion(valor){
    const funciones = ['C', '=', '.', '+/-'];

    return funciones.some( (funcion, index) => funcion == valor);
}

function $(selector){
    return document.querySelector(selector);
}

function $$(selector){
    return document.querySelectorAll(selector);
}
```
# Componente de pestañas 72/102
```js
Primero hacemos referencia a los elementos HTML que vamos a necesitar en nuestro código

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

let index = 0;

cambiarTab(index);

tabs.forEach((tab, i) => {
  tab.addEventListener("click", (e) => {
    index = i;

    cambiarTab(index);
  });
});

function cambiarTab(index) {
  contents.forEach((content, i) => {
    content.style.display = "none";
  });
  tabs.forEach((tab, i) => {
    tab.classList.remove("active-tab");
  });
  tabs[index].classList.add("active-tab");
  contents[index].style.display = "block";
}
```
# Ejercicios. Buscador de sugerencias 73/103
```js
const db = [
  "luis",
  "maria",
  "sergio",
  "josue",
  "lena",
  "marcos",
  "omar",
  "enrique",
];

const buscador = $("#buscador");
const sugerencias = $("#sugerencias");

buscador.addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase().trim();

  if (q == "") mostrarSugerencias([], q);

  const res = db.filter((item) => {
    if (item.indexOf(q) > -1) return item;
  });

  mostrarSugerencias(res, q);
});

function mostrarSugerencias(valores, q) {
  sugerencias.innerHTML = "";
  if (q == "") {
    console.log("sd");
    sugerencias.style.display = "none";
    return false;
  } else {
    sugerencias.style.display = "block";
  }

  valores.forEach((item) => {
    const elemento = document.createElement("a");
    let texto = item.replace(q, `<strong>${q}</strong>`);
    elemento.innerHTML = texto;
    elemento.href = "#";
    sugerencias.appendChild(elemento);

    elemento.addEventListener("click", (e) => {
      buscador.value = e.target.textContent;
      sugerencias.innerHTML = "";
      sugerencias.style.display = "none";
    });
  });
}

function $(selector) {
  return document.querySelector(selector);
}
function $$(selector) {
  return document.querySelectorAll(selector);
}
```
# Ejercicios. Temporizador 74/102
```js
const tiempo = {
  segundos: {
    valor: 0,
    limite: 59,
  },
  minutos: {
    valor: 0,
    limite: 59,
  },
  horas: {
    valor: 0,
    limite: 23,
  },
};

const botonesAumentar = document.querySelectorAll(".bAumentar");
const botonesDisminuir = document.querySelectorAll(".bDisminuir");
const bIniciar = document.querySelector("#bIniciar");
const bDetener = document.querySelector("#bDetener");
const bReiniciar = document.querySelector("#bReiniciar");

let contador;

botonesAumentar.forEach((botonAumentar) => {
  botonAumentar.addEventListener("click", (e) => {
    //console.log(e.target.getAttribute('data-unidad'));
    const unidad = e.target.getAttribute("data-unidad");
    incrementar(unidad);
    //console.log(tiempo);
  });
});

botonesDisminuir.forEach((botonesDisminuir) => {
  botonesDisminuir.addEventListener("click", (e) => {
    //console.log(e.target.getAttribute('data-unidad'));
    const unidad = e.target.getAttribute("data-unidad");
    disminuir(unidad);
    //console.log(tiempo);
  });
});

bIniciar.addEventListener("click", iniciarCuenta);
bDetener.addEventListener("click", detenerCuenta);
bReiniciar.addEventListener("click", (e) => {
  detenerCuenta();
  tiempo.segundos.valor = 0;
  tiempo.minutos.valor = 0;
  tiempo.horas.valor = 0;
  pintarInterfaz();
});

function incrementar(unidad) {
  if (tiempo[unidad].valor + 1 <= tiempo[unidad].limite) {
    tiempo[unidad].valor++;
  }

  pintarInterfaz();
}

function disminuir(unidad) {
  if (tiempo[unidad].valor - 1 >= 0) {
    tiempo[unidad].valor--;
  }

  pintarInterfaz();
}

function pintarInterfaz() {
  const horas = document.querySelector("#horas .numero");
  const minutos = document.querySelector("#minutos .numero");
  const segundos = document.querySelector("#segundos .numero");

  horas.textContent = `0${tiempo.horas.valor}`.slice(-2);
  minutos.textContent = `0${tiempo.minutos.valor}`.slice(-2);
  segundos.textContent = `0${tiempo.segundos.valor}`.slice(-2);
}

function iniciarCuenta() {
  contador = setInterval(() => {
    const { horas, minutos, segundos } = tiempo;

    if (horas.valor === 0 && minutos.valor === 0 && segundos.valor === 0) {
      detenerCuenta();
    } else if (segundos.valor === 0) {
      if (minutos.valor === 0) {
        if (horas.valor === 0) {
          //nada
        } else {
          tiempo.minutos.valor = tiempo.minutos.limite;
          tiempo.segundos.valor = tiempo.segundos.limite;
          disminuir("horas");
        }
      } else {
        tiempo.segundos.valor = tiempo.segundos.limite;
        disminuir("minutos");
      }
    } else {
      disminuir("segundos");
    }
  }, 1000);
}

function detenerCuenta() {
  console.log("fin");
  clearInterval(contador);
}

```

# Ejercicios. Calculador de propinas 75/102
```js
const itPersonas = $("#personas");
const itTotal = $("#total");
const itPropina = $("#propina");
const bGenerar = $("#bgenerar");
const resultados = $("#resultados");
const summary = $("#summary");

let propinas = [];

let personas; //numero de personas
let total; //total de la cuenta
let totalPorPersona; //cuanto paga cada persona
let porcentajePropina; //% de propina
let propinaPorPersona; //%propina/nº de personads
let totalConPropina;// total + % propina

function render() {
  summary.innerHTML = `<h2>Total a pagar: $${totalConPropina.toFixed(2)}</h2>`;
  summary.innerHTML += `<h2>Propina total: $${
    propinaPorPersona * personas
  }</h2>`;
  let html = "";
  propinas.forEach((persona) => {
    const { id, consumo, propina, total, pagado } = persona;
    html += `
            <div class="persona ${pagado ? "pagado" : ""}" data-id="${id}">
                <h3>Persona ${id}</h3>
                <div class="consumo">Consumo: $${consumo}</div>
                <div class="propina">Propina: $${propina}</div>
                <div class="total">Total: $${total.toFixed(2)}</div>
                <div class="check"><input type="checkbox" ${
                  pagado ? "checked" : ""
                } /> Pagado</div>
            </div>`;
  });
  resultados.innerHTML = html;
  $$("input[type=checkbox]").forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      const id = e.target.parentElement.parentElement.getAttribute("data-id");
      const index = propinas.findIndex((item) => item.id == id);
      const persona = propinas[index];
      console.log(persona);
      persona.pagado = e.target.checked;
      console.log(propinas);
      pagar();
    });
  });
}

bGenerar.addEventListener("click", (e) => {
  calcular();

  propinas = [];
  for (let i = 1; i <= personas; i++) {
    const subtotal =
      parseFloat(totalPorPersona) + parseFloat(propinaPorPersona);
    const persona = {
      id: i,
      consumo: totalPorPersona,
      propina: propinaPorPersona,
      total: subtotal,
      pagado: false,
    };

    propinas.push(persona);
  }
  render();
});

function calcular() {
  personas = parseInt(itPersonas.value);
  total = parseInt(itTotal.value);
  totalPorPersona = parseFloat(total / personas).toFixed(2);
  porcentajePropina = parseFloat(itPropina.value / 100).toFixed(2);
  propinaPorPersona = parseFloat(totalPorPersona * porcentajePropina).toFixed(
    2
  );
  totalConPropina = parseFloat(total) + total * porcentajePropina;
}

function pagar() {
  const noPagados = propinas.filter((x) => x.pagado == false);
  const nuevoTotal = noPagados.reduce((acc, item, i) => {
    return (acc += parseFloat(item.total));
  }, 0);
  totalConPropina = nuevoTotal;
  personas = noPagados.length;
  render();
}

function $(selector) {
  return document.querySelector(selector);
}
function $$(selector) {
  return document.querySelectorAll(selector);
}
```
# DOM Selects Dinámicos 76/102
```js
const data = {
  paises: ["mexico", "eu", "italia"],

  estados: {
    mexico: ["df", "oaxaca"],
    eu: ["ny", "arizona"],
    italia: ["florencia", "roma"],
  },
  distritos: {
    df: ["alvaro obregon", "polanco", "cuajimalpa"],
    oaxaca: ["tuxtepec", "mixtle", "ocotan"],
    ny: ["bronx", "brooklyn", "manhattan"],
    arizona: ["phoenix", "tucson", "chandler"],
    florencia: ["fiesole", "pelago", "vinci"],
    roma: ["poli", "riano", "nemi"],
  },
};
const paises = $("#paises");
const estados = $("#estados");
const distritos = $("#distritos");
paises.innerHTML = "";

llenarSelect(this.paises, data.paises);

paises.addEventListener("change", (e) => {
  const pais = e.target.value;
  if (pais == "") return false;
  const estados = data.estados[pais];

  llenarSelect(this.estados, estados);
});

estados.addEventListener("change", (e) => {
  const estado = e.target.value;
  if (estado == "") return false;
  const distritos = data.distritos[estado];

  llenarSelect(this.distritos, distritos);
});

function llenarSelect(elemento, data) {
  elemento.innerHTML = "";
  const empty = document.createElement("option");
  elemento.add(empty);

  data.forEach((item) => {
    const option = document.createElement("option");
    option.text = item;
    option.value = item;

    elemento.add(option);
  });
}

function $(selector) {
  return document.querySelector(selector);
}
function $$(selector) {
  return document.querySelectorAll(selector);
}
```
# DOM. Validaciones de password 77/102
```js
const validacion = {
  longitud: {
    limite: 8,
    pass: false,
  },
  minusculas: {
    limite: 2,
    pass: false,
  },
  mayusculas: {
    limite: 2,
    pass: false,
  },
  numeros: {
    limite: 1,
    pass: false,
  },
  caracteres: {
    limite: 1,
    pass: false,
  },
};

const password = document.querySelector("#password");

password.addEventListener("input", (e) => {
  const texto = e.target.value;
  //longitud
  validacion.longitud.pass = texto.length >= validacion.longitud.limite;
  // minusculas: 97 - 122

  const arregloTexto = texto.split("");
  //    console.log(contarMinusculas(arregloTexto));

  validacion.minusculas.pass =
    contarMinusculas(arregloTexto) >= validacion.minusculas.limite;

  validacion.mayusculas.pass =
    contarMayusculas(arregloTexto) >= validacion.mayusculas.limite;

  validacion.numeros.pass =
    contarNumeros(arregloTexto) >= validacion.numeros.limite;

  validacion.caracteres.pass =
    contarCaracteres(arregloTexto) >= validacion.caracteres.limite;

  mostrarResultados();
});

function contarMinusculas(arreglo) {
  const res = arreglo.filter(
    (c) => parseInt(c.charCodeAt(0)) >= 97 && parseInt(c.charCodeAt(0)) <= 122
  );
  return res.length;
}

function contarMayusculas(arreglo) {
  const res = arreglo.filter(
    (c) => parseInt(c.charCodeAt(0)) >= 65 && parseInt(c.charCodeAt(0)) <= 90
  );
  return res.length;
}

function contarNumeros(arreglo) {
  const res = arreglo.filter(
    (c) => parseInt(c.charCodeAt(0)) >= 48 && parseInt(c.charCodeAt(0)) <= 57
  );
  return res.length;
}

function contarCaracteres(arreglo) {
  const res = arreglo.filter(
    (c) =>
      (parseInt(c.charCodeAt(0)) >= 33 && parseInt(c.charCodeAt(0)) <= 47) ||
      (parseInt(c.charCodeAt(0)) >= 58 && parseInt(c.charCodeAt(0)) <= 64)
  );
  return res.length;
}

function mostrarResultados() {
  const resultados = document.querySelector("#resultados");
  resultados.textContent = "";
  for (prop in validacion) {
    const criterio = validacion[prop];
    const { limite, pass } = criterio;
    resultados.innerHTML += `<div class="${
      pass ? "success" : "error"
    }">${prop}: al menos ${limite}</div>`;
  }
}
```
# DOM. Validacion de correo 78/102
```js
const validacion = {
  longitud: false,
  arroba: false,
  puntos: false,
  estructura: false,
};

const email = document.querySelector("#email");

email.addEventListener("input", (e) => {
  const texto = e.target.value;
  const arregloTexto = texto.split("");
  validacion.longitud = texto.length >= 6;
  validacion.arroba = contarCaracter(arregloTexto, "@") === 1;
  validacion.puntos = contarCaracter(arregloTexto, ".") === 1;
  validacion.estructura = validarEstructura(arregloTexto);
  console.log(validacion);
  mostrarResultados();
});

function contarCaracter(arreglo, caracter) {
  console.log("sds");
  const res = arreglo.filter((c) => c === caracter);
  return res.length;
}

function validarEstructura(arreglo) {
  let res = 0;
  let index = arreglo.indexOf("@");

  if (index > 0 && index < arreglo.length - 3) {
    res++;
  }
  index = arreglo.indexOf(".");
  if (index > 0 && index < arreglo.length - 3) {
    if (arreglo[index - 1] != "." || arreglo[index + 1] != ".") {
      res++;
    }
  }

  if (res == 2) return true;
  return false;
}

function mostrarResultados() {
  const resultados = document.querySelector("#resultados");
  resultados.textContent = "";
  for (prop in validacion) {
    const criterio = validacion[prop];
    resultados.innerHTML += `<div class="${
      criterio ? "success" : "error"
    }">${prop}</div>`;
  }
}
```
# Asincronismo 79/102

#### Javascript es un lenguaje que  fue creado para trabajar de forma síncrona por lo tanto solamente se puede ejecutar en un solo hilo (main thread). A diferencia de algunos otros lenguajes de programación los cuales nos permiten crear más hilos o estos tres o procesos adicionales para poder crear tareas en paralelo Esta es una ventaja o desventaja lo vamos a ver más adelante lo importante de esta primera parte de la introducción Pues es que entiendan que realmente Ya ves Script no corre en ningún proceso en paralelo solamente tiene un proceso dedicado a la ejecución de nuestro código y vamos a ver más adelante Cómo podemos aprovechar algunas funcionalidades para simular esta parte del paralelismo o del asincronismo que es tratar de evitar que nos suceda lo que nos pasa con nuestra aplicación de calculadora es decir poder ejecutar más de una tarea al mismo tiempo sin la necesidad de bloquear toda la aplicación web

# Ejercicio de Asincronismo 80/102
```js
setInterval(() => {
  document.querySelector("#resultado").textContent = new Date();
}, 1000);

for (let i = 0; i < 10; i++) {
  console.log("hola");
}
// console.log("Fin del ciclo");

console.log("Inicio de timer");
setInterval(() => {
  console.log("timer activado");
}, 1000);
console.log("Fin de timer");
// setInterval ejecuta la función cada cierto tiempo (expresado en milisegundos)

 console.log("inicio ciclo");
 for (var i = 0; i <= 5; i++) {
   setTimeout(function () {
     console.log("count ", i);
   }, 3000);
 }
 console.log("fin ciclo");
//setTomeout a partir de un determinado tiempo( expresado en milisegundos)

 console.log("inicio ciclo 2");
 for (let i = 0; i <= 5; i++) {
   setTimeout(function () {
     console.log("count ", i);
   }, 3000);
 }
 console.log("fin ciclo 2");
```
# Callbacks (Teoría) 81/102

#### Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

#### Sin embargo, las callbacks a menudo se utilizan para continuar con la ejecución del código después de que se haya completado una operación a sincrónica — estas se denominan devoluciones de llamada asincrónicas.
```js
Callbacks

Tarea 1 -> Tarea 2 -> Tarea 3
              |
           Callback -> Tarea 4

boton.adEventListener('click', function(){});                                |
                                  (1)

//  (1)La funcion se va a ejecutar en cualquier momento de la aplicación cuando al boton se le da click. No depende de una tarea anterior y las siguientes tareas no la tienen que esperar

Callbacks
tarea([1,2,3,4,5],function() {
// código
});
```
# Callbacks (prácticas) 82/102

```js
const boton = document.querySelector("#boton");
const input = document.querySelector("#input");

let dato = 50;
 boton.addEventListener('click', e  => {
    dato = 100;
    console.log('evento click', 'dato = ', dato);
});
console.log('Dato = ', dato);

function calcularSuma(valores, callback){
    const res = valores.reduce((acc, value) => acc += value, 0);
    callback();
    console.log('ya se mandó a llamar el callback');
    return res;
}

console.log(calcularSuma([1,2,3,4,5], function(){
    console.log('Aquí termina la función');
}));
```
# Callbacks de exito y error 83/102

```js
function calcularSuma2(valores, callback){
    const res = valores.reduce((acc, value) => acc += value, 0);
    callback(res);
    console.log('ya se mandó a llamar el callback');
}

calcularSuma2([2,4,6,8], res => {
    console.log('el resultado es: ', res);
});

function calcularSuma3(valores, callback, errorCallback){
    const res = valores.reduce((acc, value) => {
        if(isNaN(value)){
            errorCallback(`El valor ${value} no es numérico`);
            return false;
        }else{
            return acc+= value;
        }
    });
    callback(res);
}

calcularSuma3([1,1,1,'d'], res => {
    if(res) console.log('resultado de calcularSuma3 =', res);
}, error => {
    console.error(error);
});
```
# Callbacks anidados (prácticas) 84/102

segunda parte
```js
const convertir = (texto, callback, errorCallback) => {
    if(texto.length == 0){
        errorCallback('No hay texto que transformar');
        return false;
    }
    callback(texto.toUpperCase());
}

const obtenerCodigo = (texto, callback, errorCallback) => {
    if(texto.length == 0){
        errorCallback('No hay texto que transformar');
        return false;
    }
    const res = texto.split('').map(valor => {
        return valor.charCodeAt(0);
    });
    callback(res);
}

const transformar = (arreglo, callback, errorCallback) => {
    if(arreglo.length == 0){
        errorCallback('arreglo vacio');
        return false;
    }
    const res = arreglo.map(valor => valor * 5).reduce((acc, valor) => acc += valor , 0);

    callback(res);
}

boton.addEventListener('click', e => {
    convertir(input.value, res => {
        obtenerCodigo(res, arreglo => {
            console.log(arreglo);
            transformar(arreglo, suma => {
                console.log('suma final', suma);
            }, error => {
                throw new Error(error);
            });
        }, error =>{
            throw new Error(error);
        });
    }, error => {
        throw new Error(error);
    });
});
```
# Promesas (Teoría) 85/102
```js
Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona.
            -------- Resuelve-> Tarea 4
           |
        Promesa  --- Rechaza -> Tarea 5
           |
           |
Tarea 1->Tarea 2->Tarea 3

const p= new Promise(function(resolve, reject){
if(condición se cumple){
return resolve(params);
}else{
return reject(params);
}
});

 La diferencia con los Callbacks viene cuando llamamos a la función:

p.then(function(result){},function(error){});
   (1)        (2)                 (3)

(1) Ejecuta la Promesa
(2) Ejecuta el resolve
(3) Ejecuta el reject

 También se puede llamar así, separando la función resolve de la funcion reject, usando catch. Se considera una forma más elegante de usar las promesas

p.then(function(result){}).catch(function(error){});
   (1)        (2)                 (3)

// También se puede usar esta notación que se considera más limpia

p
.then(function(result){})
.catch(function(error){};)
```
# Promesas (práctica) 86/102
```js
const promesa = new Promise((resolve, reject) => {
  const numero = 100;
  if (numero == 10) resolve("el valor es correcto");

  reject("el valor no es correcto");
});

const promesa2 = function () {
  return new Promise((resolve, reject) => {
    let res = 0;
    for (let i = 1; i < 1000000; i++) {
      res += i * i;
    }
    if (res <= 0) reject("No se completó la operación");
    resolve(res);
  });
};

console.log(promesa);
promesa.then(
  (res) => {
    console.log(res);
  },
  (error) => {
    console.error(error);
  }
);

console.log("aquí empieza promesa 2");
promesa2()
  .then((res) => {
    console.log("resolví la promesa, res=", res);
  })
  .catch((error) => {
    console.error(error);
  });
console.log("aquí termina promesa 2");

console.log('el valor de res =', res);
// -> ReferenceError: res is not defined
// En este caso da un error porque estamos llamando a res fuera del contexto el que está incluida la variable

```

# Callbacks vs Promesas (práctica) 87/102

```js
const convertir = (texto) => {
  return new Promise((resolve, reject) => {
    if (texto.length == 0) {
      reject("No hay texto que transformar");
    }
    resolve(texto.toUpperCase());
  });
};

const obtenerCodigo = (texto) => {
  const p = new Promise((resolve, reject) => {
    if (texto.length == 0) {
      reject("No hay texto que transformar");
    }
    const res = texto.split("").map((valor) => {
      return valor.charCodeAt(0);
    });
    resolve(res);
  });

  return p;
};

function transformar(arreglo) {
  return new Promise((resolve, reject) => {
    if (arreglo.length == 0) {
      reject("arreglo vacio");
      return false;
    }
    const res = arreglo
      .map((valor) => valor * 5)
      .reduce((acc, valor) => (acc += valor), 0);

    resolve(res);
  });
}

convertir("Marcos Rivas")
  .then((res) => obtenerCodigo(res))
  .then((res) => transformar(res))
  .then((res) => {
    console.log("resultado: ", res);
  })
  .catch((error) => {
    throw new Error(error);
  });
```

# Promesas al mismo tiempo 88/102

## **resolver todas las promesas**

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "uno");
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "dos");
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "tres");
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "cuatro");
});
const p5 = new Promise((resolve, reject) => {
   setTimeout(resolve, 5000, "cinco");
  //reject("error");
});

Promise
.all([p1,p2,p3,p4,p5])
.then(resultado =>{
  console.log(resultado);

})
.catch(error =>{
  console.log(error)
});
```

# Async y Await Teoria 89/102

#### ¿Cómo uso async-await? async y await Dentro de una función asíncrona, puede usar la palabra clave await antes de una llamada a una función que devuelve una promesa. Esto hace que el código espere en ese punto hasta que se liquide la promesa, momento en el que el valor cumplido de la promesa se trata como un valor de retorno o se arroja el valor rechazado


## **Async/Await**
```js
async function actividad(){

const res = await promesa() ;
}

const promesa = new Promise(function(resolve,
reject){
  // ...
}); 
```
#### Con esto estamos haciendo que promesa sea una función asíncrona, pero que espere a terminarse para poder seguir con el tiempo de ejecución del main Thread en javascript 

# Async y Await (práctica) 90/102
```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "uno");
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "dos");
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "tres");
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "cuatro");
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "cinco");
  //reject("reject");
});

async await
const operacion = new Promise(function (resolve, reject) {
  setTimeout(resolve, 3000, "Operación completa**");
});

async function resolver() {
  console.log("inicia operación");
  const res = await operacion;
  console.log(res);
  console.log("termina operación");
}

resolver();

(async () =>{
  console.log("inicia operación con async/await");
  const res = await Promise.all([p1, p2, p3, p4, p5]);
  console.log("async/await", res);
  console.log("termina operación con async/await");
})();
```
# Introducción a JSON 91/102

#### JavaScript Object Notation (JSON)

JSON es una sintaxis para serializar objetos, arreglos, números, cadenas, booleanos y nulos. Está basado sobre sintaxis JavaScript pero es diferente a ella: algo JavaScript no es JSON, y algo JSON no es JavaScript. Mira también: JSON: The JavaScript subset that isn't.

|Tipo JavaScript|	Diferencia JSON|
|--|--| 
|Objetos y arreglos |	Los nombres de las  propiedades deben tener doble comilla; las comas finales están prohibidas.
|Números |	Los ceros a la izquierda están prohibidos; un punto decimal debe ser seguido al menos por un dígito.
|Cadenas |	Solo un limitado conjunto de caracteres pueden ser de escape; ciertos caracteres de control estan prohibidos; los caracteres de separador de linea Unicode (U+2028) y el separador de parrafo (U+2029) son permitidos; las cadenas deben estar entre comillas dobles. Mira el siguiente ejemplo donde JSON.parse funciona bien y unSyntaxError es generado cuando se evalua el codigo como JavaScript:
```js
    var code = '"\u2028\u2029"';
    JSON.parse(code); // works fine
    eval(code); // fails
```
## **Diferencias entre JSON y un Objeto JS**

- JSON es sólo un formato de datos — contiene sólo propiedades, no métodos.
- JSON requiere usar comillas dobles para las cadenas y los nombres de propiedades. Las comillas
simples no son válidas.
- Una coma o dos puntos mal ubicados pueden producir que un archivo JSON no funcione.
- JSON puede tomar la forma de cualquier tipo de datos que sea un JSON, no sólo arreglos u objetos. Así, por ejemplo, una cadena o un número único podrían ser objetos JSON válidos.
- A diferencia del código JavaScript en que las propiedades del objeto puede no estar entre 
comillas, en JSON, sólo las cadenas entre comillas pueden ser utilizadas como propiedades

# JSON (prácticas) 92/102
```js
{
    "nombre": "Marcos",
    "edad": -14.5,
    "elementos":{
        "titulo": "Elemento 1",
        "completo": true,
        "habilidades":[
            {
                "id": 0,
                "fecha": "12/12/2020"
            },
            {
                "id": 0,
                "fecha": "12/12/2020"
            },
            {
                "id": 0,
                "fecha": "12/12/2020"
            }
        ],
        "lenguajes":{
            "lenguage01": {
                "nombre": "Javascript"
            }
        }
    }
}
```

# Solicitudes HTTP (Teoría) 93/102
```js
Cuando un dispositivo localiza una red Wi‑Fi y se conecta a ella, envía una solicitud HTTP siempre que necesita ir a otra página o archivo. Si la solicitud se procesa correctamente, el usuario puede acceder a todo lo que quiera en la Web. La mayoría de los dispositivos funcionan igual con una solicitud HTTP.

Métodos principales para enviar Solicitudes HTTP 

GET
-> Solicita información del servidor
POST
-> Mandar información al servidor para crear o actualizar

// Así es como se ve una solicitud recibida


GET /hello.htm HTTP/I.I
User-
Agent: Mozilla/4.0 (compatible;MSIE5.01;
Windows NT)
Host: www.vidamrr.com
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive

// Si se manda una solicitud 

POST /upload.php HTTP/I.I
User-Agent.• Mozilla/4.O (compatible; MSIE5.01; Windows NT)
Host: www.vidamrr.com
Content-Type: application/x-www-form-urlencoded
Content-Length: length
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
nombre=Marcos6edad=28
```

# AJAX (Teoría) 94/102

#### JavaScript Asíncrono + XML (AJAX) no es una tecnología por sí misma, es un término que describe un nuevo modo de utilizar conjuntamente varias tecnologías existentes. Esto incluye: HTML o XHTML, CSS, JavaScript, DOM, XML, XSLT, y lo más importante, el objeto XMLHttpRequest. Cuando estas tecnologías se combinan en un modelo AJAX, es posible lograr aplicaciones web capaces de actualizarse continuamente sin tener que volver a cargar la página completa. Esto crea aplicaciones más rápidas y con mejor respuesta a las acciones del usuario.

# Solicitudes HTTP (práctica) 95/102

## **Ver backend/tutorial.http**

# Solicitudes con XMLHttpRequest (Teoría) 96/102

XHR - GET

1. Crear un objeto XMLHttpRequest
2. Definir un callback para el eventListener cuando cargue la solicitud
3. Definir el tipo de solicitud y sitio a solicitar
4. Enviar solicitud

// (1) XHR - Crear un objeto XHttpRequest
```js
const xhr = new XMLHttpRequest();
```
// (2) XHR - Definir callbacks para el eventListener

load: cuando la solicitud ha sido completada, sin importar si hay error o no.
progress: cuando la solicitud está en ejecución 
readystatechange: cuando cambia el atributo readyState de la solicitud.
error: cuando la solicitud no se completó por un problema
readystatechange: cuando cambia el atributo readyState de la solicitud.

|Valor |  Estado      | Descripción                     |
|--|--|--|
|0 |    UNINITIALIZED | Todavia no se llamó a open()    |
|1 |    LOADING       | Todavia no se llamó a send()
|2 |    LOADED        | send() ya fue invocado y los encabezados y el estado están disponibles
|3 |    INTERACTIVE   | Descargando; responseText contiene información parcial |
|4 |    COMPLETED     | La operación está terminada

status : el resultado de la solicitud HTTP

|Number   | Description                         |
|--|--|
|200      | OK                                  |
|400      | Bad Request                         |
|404      | Not found                           |
|500      | Internal Server Error               |
|501      | Not implemented                     |
|502      | Bad Gateway                         |
|503      | Service Unavailable                 |
|504      | Gateway Timeout                     |

 xhr.addEventListener ('load',  load', e => {
if(e.target.status==200){
console . log (xhr.response);
}
});

// XHR - Definir el tipo de solicitud y sitio a  solicitar

(3) xhr.open('GET', 'http : //www.vidamrr.com') ;

// XHR-Enviar solicitud

(4) xhr.send();

// Una solicitud POST es practicamente lo mismo

XHR - POST
```js
const xhr = new XMLHttpRequest()
xhr.addEventListener ('load',  load', e => {
if(e.target.status==200){
console . log (xhr.response);
}
});
xhr.open('POST', 'http : //www.vidamrr.com') ;
xhr.send();
```
# Solicitudes GET con XMLHttpRequest (práctica) 97/102
```js
const contenedor = document.querySelector('#resultado');
 const xhr = new XMLHttpRequest();

xhr.addEventListener('load', e => {
     if(xhr.status == 200){
         // contenedor.innerHTML = xhr.response;
        // console.log('respuesta entregada')
     console.log(e.target);
    }
});

 xhr.addEventListener('progress', e => {
     console.log('cargando...');
     contenedor.textContent = 'Cargando...';
 });

xhr.open('GET', 'http://localhost:5500');
xhr.send();
// console.log('conexión terminada');
```
# Solicitudes POST con XMLHttpRequest (práctica) 98/102

```js
function get(url, method, successCallback, progressCallback, errorCallback) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", (e) => {
     if(xhr.status == 200){
            contenedor.innerHTML = xhr.response;
        }
    successCallback(e.target.response);
  });

  xhr.addEventListener("progress", (e) => {
     console.log('cargando...');
        contenedor.textContent = 'Cargando...';
    progressCallback(e);
  });

  xhr.addEventListener("error", (e) => {
    errorCallback(e);
  });

  xhr.open(method, url);
  xhr.send();
}

get(
  "http://localhost:5500",
  "GET",
  (res) => {
    console.log(res);
  },
  (progress) => {},
  (error) => {}
);

const xhr = new XMLHttpRequest();

xhr.addEventListener("load", (e) => {
  if (xhr.status == 200) {
    console.log(JSON.parse(xhr.response));
    contenedor.innerHTML = xhr.response;
  }
});

xhr.addEventListener("progress", (e) => {
  console.log("cargando...");
  contenedor.textContent = "Cargando...";
});

xhr.open("POST", "http://localhost:5500/");
//xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader("Content-Type", "application/json");
const data = { nombre: "Marcos", edad: 28 };
xhr.send(JSON.stringify(data));

function post(url, options, successCallback, progressCallback, errorCallback) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", (e) => {
    /* if(xhr.status == 200){
            contenedor.innerHTML = xhr.response;
        } */
    successCallback(e.target.response);
  });

  xhr.addEventListener("progress", (e) => {
    /* console.log('cargando...');
        contenedor.textContent = 'Cargando...'; */
    progressCallback(e);
  });

  xhr.addEventListener("error", (e) => {
    errorCallback(e);
  });

  xhr.open(options.method, url);
  xhr.setRequestHeader("Content-Type", options.headers["content-type"]);
  xhr.send(JSON.stringify(options.body));
}

post(
  "http://localhost:5500",
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: { nombre: "Lena", edad: 29 },
  },
  (res) => {
    console.log(JSON.parse(res));
  },
  (progress) => {},
  (error) => {}
);
```
# Solicitudes POST con XMLHttpRequest (práctica) 98/102
```js
const contenedor =document.querySelector('#resultado');
const xhr = new XMLHttpRequest();

 xhr.addEventListener('load', e => {
    if(xhr.status === 200){
         console.log('Respuesta entregda', JSON.parse(xhr.response).datos.nombre);
        contenedor.innerHTML = xhr.response;
     }
 });

xhr.addEventListener('progress', e => {
    console.log('cargando...');
    contenedor.textContent = 'Cargando...';
});

xhr.open('POST', 'http://localhost:5500/');
xhr.setRequestHeader("Content-Type", "application/json");
 const data = { "nombre": "Marcos", "edad": 28 };

xhr.send(JSON.stringify(data));
console.log('conexión terminada, xhr.response');
```
# Solicitudes HTTP con XMLHttpRequest y callbacks (práctica) 99/102
```js
const xhr = new XMLHttpRequest();
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.send(JSON.stringify(data));

function post(url, options, successCallback, progressCallback, errorCallback){
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', e => {
        /* if(xhr.status == 200){
            contenedor.innerHTML = xhr.response;
        } */
        successCallback(e.target.response);
    });

    xhr.addEventListener('progress', e => {
        /* console.log('cargando...');
        contenedor.textContent = 'Cargando...'; */
        progressCallback(e);
    });

    xhr.addEventListener('error', e => {
        errorCallback(e);
    });

    xhr.open(options.method, url);
    xhr.setRequestHeader('Content-Type', options.headers['content-type']);
    xhr.send(JSON.stringify(options.body))
}

post('http://localhost:5500', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: {nombre: 'Lena', edad: 29}
}, res => {
    console.log(JSON.parse(res));
}, progress => {

}, error => {
});
```
# Fetch (Teoria) 100/102

Es el método más moderno para solicitudes.
La API Fetch proporciona una interfaz para obtener recursos (incluso a traves de la red). Parecera familiar a quien sea que haya usado XMLHttpRequest, pero proporciona un conjunto de características más potentes y flexibles. Este artículo explica algunos de los conceptos básicos de la API Fetch.

Funcionamiento de fetch

1. Especificar URL
```js
fetChC http : //www.vidamrr.com ' )
```
2. Definir método y headers
```js
{
    method:' POST',
body: data,
headers :
' Content-Type': 'application/x-www-form-urlencoded '
}
```
3. Resolver promesa
```js
.then(response => {
// codigo
return response. json(); // -> otra promesa
```
4. Resolver promesa encadenada para texto o JSON
```js
. then(result => {
//codigo
});
```
Resumen:
```js

            Solicitud
----------------------------------------
|fetch('http://www.vidamrr.com', {       |
|    method: 'POST',                     |
|    body: data,                         |
|   headers: {                           |
    Content-Type': 'application/json'    |
|    }                                   |
|})                                      |
-----------------------------------------
            Respuesta
----------------------------------
|                                 |
|.then(response=>{                |
|    return response.json();      |
| })                              |
|.then(result=>{                  |
| })                              |
----------------------------------
```
Fetch (prácticas) 101/102
```js
 const contenedor = document.querySelector('#resultado');

fetch('http://localhost:3000')
.then(respuesta => {
    console.log(respuesta);
    return respuesta.json()
})
.then(resultado => {
    console.log(resultado.datos[0].title);
    contenedor.innerHTML = resultado.datos[0].title;

});

.then(texto => {
    contenedor.innerHTML = texto;
    console.log(texto);
});

fetch('http://localhost:3000',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({'curso': 'Javascript'})

})

. then( respuesta=> respuesta.json())
. then(json =>{
console. log(json);
})
. catch( error => {
console.error(error);
});
```

# Fetch con async/await (práctica) 102/102
```js
function get(){
  fetch("http://localhost:3000/api")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
get();

( async () => {
    try {
        const res = await fetch('http://localhost:5500',);
        console.log(res);
        console.log('Termina la solicitud HTTP');
    } catch (error) {
        console.error(error);
    }

})();
```