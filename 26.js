//https://doganozturk.dev/javascript-temelleri-hoisting/

console.log(person);
console.log(greetPerson);
console.log(greetPerson());

var person = 'ahmet';

function greetPerson() {
    console.log('Hello ' + person);

    var person = 'mehmet';
}


//Asagidaki gibi calisiyor.
// var person = undefined;

// function greetPerson() {
//     var person = undefined;

//     console.log('Hello ' + person);

//     person = 'mehmet';
// }

// console.log(person); // undefined
// console.log(greetPerson); // function greetPerson()
// console.log(greetPerson()); // 'Hello undefined'

// person = 'ahmet';