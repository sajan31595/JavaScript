console.log('Hello World');
let interestRate =0.5;
interestRate =1;
console.log(interestRate);

const constant =1;
//constant=2;//Is Not Possible as this is a constant
console.log(constant);

let name ='Sajan';
let age =30;
let isApplicable = true;
let firstName = undefined;//If not defined also in that case undefined
let lastName =null;

let person = {
    name :'Sajan',
    age : 24
};

person.name='Rocky';
console.log(person);
person['name'] = 'Sahu';
console.log(person);

let setAge = 'age';
person[setAge]=40;

console.log(person);

let selectedColors = ['red','blue'];
console.log(selectedColors[0]);
selectedColors[2]='green';
console.log(selectedColors.length);
console.log(selectedColors);

calculate();
greet(person.name, 'Sahu title');
console.log(square(2));
//Functions

function calculate(){
    let length=10;
    let bred =20;
    console.log(length* bred);
}
function greet(name,lastName){
    console.log('Hello : '+name+' '+lastName);
}

function square(number){
    return number*number;
}