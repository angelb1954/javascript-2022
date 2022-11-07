Promesas al mismo tiempo 88/102

resolver todas las promesas

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

Async y Await Teoria 89/102

¿Cómo uso async-await? async y await Dentro de una función asíncrona, puede usar la palabra clave await antes de una llamada a una función que devuelve una promesa. Esto hace que el código espere en ese punto hasta que se liquide la promesa, momento en el que el valor cumplido de la promesa se trata como un valor de retorno o se arroja el valor rechazado


Async/Await

async function actividad(){

const res = await promesa() ;
}

const promesa = new Promise(function(resolve,
reject){
  // ...
}); 

Con esto estamos haciendo que promesa sea una función asíncrona, pero que espere a terminarse para poder seguir con el tiempo de ejecución del main Thread en javascript 



Async y Await (práctica) 90/102

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

Introducción a JSON 91/102

JavaScript Object Notation (JSON)
JSON es una sintaxis para serializar objetos, arreglos, números, cadenas, booleanos y nulos. Está basado sobre sintaxis JavaScript pero es diferente a ella: algo JavaScript no es JSON, y algo JSON no es JavaScript. Mira también: JSON: The JavaScript subset that isn't.

|Tipo JavaScript|	Diferencia JSON|
 
|Objetos y arreglos |	Los nombres de las
 propiedades deben tener doble comilla; las comas finales están prohibidas.
|Números |	Los ceros a la izquierda están prohibidos; un punto decimal debe ser seguido al menos por un dígito.
|Cadenas |	Solo un limitado conjunto de caracteres pueden ser de escape; ciertos caracteres de control estan prohibidos; los caracteres de separador de linea Unicode (U+2028) y el separador de parrafo (U+2029) son permitidos; las cadenas deben estar entre comillas dobles. Mira el siguiente ejemplo donde JSON.parse funciona bien y unSyntaxError es generado cuando se evalua el codigo como JavaScript:

    var code = '"\u2028\u2029"';
    JSON.parse(code); // works fine
    eval(code); // fails

Diferencias entre JSON y un Objeto JS

• JSON es sólo un formato de datos — contiene sólo propiedades, no métodos.
• JSON requiere usar comillas dobles para las cadenas y los nombres de propiedades. Las comillas
simples no son válidas.
• Una coma o dos puntos mal ubicados pueden producir que un archivo JSON no funcione.
• JSON puede tomar la forma de cualquier tipo de datos que sea un JSON, no sólo arreglos u objetos. Así, por ejemplo, una cadena o un número único podrían ser objetos JSON válidos.
• A diferencia del código JavaScript en que las propiedades del objeto puede no estar entre 
comillas, en JSON, sólo las cadenas entre comillas pueden ser utilizadas como propiedades

JSON (prácticas) 92/102

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


Solicitudes HTTP (Teoría) 93/102

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

AJAX (Teoría) 94/102

JavaScript Asíncrono + XML (AJAX) no es una tecnología por sí misma, es un término que describe un nuevo modo de utilizar conjuntamente varias tecnologías existentes. Esto incluye: HTML o XHTML, CSS, JavaScript, DOM, XML, XSLT, y lo más importante, el objeto XMLHttpRequest. Cuando estas tecnologías se combinan en un modelo AJAX, es posible lograr aplicaciones web capaces de actualizarse continuamente sin tener que volver a cargar la página completa. Esto crea aplicaciones más rápidas y con mejor respuesta a las acciones del usuario.

Solicitudes HTTP (práctica) 95/102

Ver backend/tutorial.http
