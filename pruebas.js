


function caseInSwitch(val) {
  
  // Only change code below this line
  switch(val){
case 1:
if (val=1){
  console.log("alpha");
  break;
}
case 2:
if (val=2){
  console.log("beta");
  break;
}
case 3:
if (val=3){
  console.log("gamma");
  break;
}
case 4:
if (val=4){
  console.log("delta");
  break;
}
  // Only change code above this line
  return answer;
}
}

// caseInSwitch(2);

function chainToSwitch(val) {
  // Only change code below this line
  switch (val) {
    case 1:
      return "Marley";
      break;
    case 2:
      return "The Answer";
      break;
    case 3:
      return "There is no #1";
      break;
    case 4:
      return "Missed me by this much!";
      break;
    case 5:
      return "Ate Nine";
      break;
  }
}
// Only change code above this line

console.log(chainToSwitch(1));


// function abTest(a, b) {
//   // Only change code below this line

//   if (a >= 0 && b >= 0) {
//     return (a*b)+a;
//   }
//   return undefined;
// }

// // Only change code above this line

// console.log(abTest(2, 8));

// let count = 0;

// function cc(card) {
//   // Cambia solo el código debajo de esta línea
// switch(card){
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//     count+=1;
//     break;
 
   
  
//   case 10:
//   case "J":
//   case "Q":
//   case "k":
//   case "A":
//     count-=1;
//     break;
// if(count>0){
//   return count + "Bet"}
//   return count + "Hold"
// }  

// }


// cc(2,3,6,"k","A");

function phoneticLookup(val) {
  let result = "";

  // Cambia solo el código debajo de esta línea
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };
  const lookupalpha = lookup[alpha];
  const lookupbravo = lookup[bravo];
  const lookupcharlie = lookup[charlie];
  const lookupdelta = lookup[delta];
  const lookupecho = lookup[echo];
  const lookupfoxtrot = lookup[foxtrot];





  // Cambia solo el código encima de esta línea
  return result;
}

phoneticLookup('alpha');


const myObj = {
  top: "hat",
  bottom: "pants",
};

// myObj.hasOwnProperty("top");
// myObj.hasOwnProperty("middle");

console.log(myObj.hasOwnProperty('top'));
console.log(myObj.hasOwnProperty("middle"));


const myArray = [];
let i = 5;

while (i>=0) {myArray.push(i);
i--;
}


const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 2; i <= 6; i++) {
  total += i;
}

// console.log(total);

//import { animals } from 'animalShelter.data';

// let title = document.createElement('h1');
// title.textContent = 'Adoptable Animals';
// document.body.appendChild(title);

// for (let animal of animals) {
    
//     let animalName = document.createElement('h2');
//     animalName.textContent = animal[0];
//     document.body.appendChild(animalName);
    
//     let picture = document.createElement('img');
//     picture.src = animal[1];
//     document.body.appendChild(picture);
    
//     let description = document.createElement('p');
//     description.textContent = animal[2];
//     document.body.appendChild(description);
    
//     let button = document.createElement('button');
//     button.textContent === "Like";
//     document.body.appendChild(button);
//     button.addEventListener( 'click', ()=>{
//         if(button.textContent==='Like'){
//             button.textContent = 'Liked!';
//         }else{
//         button.textContent = 'Like';}
//     });

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Cambia solo el código debajo de esta línea
 
 for (var i= 0; i < contacts.length; i++) {

if (contacts[i]["firstName"]===name) {
if (contacts[i].hasOwnProperty(prop)){
    return contacts[i][prop];
}else{
    return "No such property";
}
}
 }
return "No such contact";

  // Cambia solo el código encima de esta línea
}

console.log(lookUpProfile("Sherlock", "Vos"));
  
