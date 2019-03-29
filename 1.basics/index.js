console.log('Hello World');
let interestRate =0.5;
console.log(interestRate);
interestRate =1;
console.log(interestRate);

const constant =1;
//constant=2;//Is Not Possible as this is a constant
console.log("Constant " + constant);

let name ='Sajan';
let age =30;
let isApplicable = true;
let firstName = undefined;//If not defined also in that case undefined
let lastName =null;
console.log(firstName + " " + lastName);

let person = {
    name :'Sajan',
    age : 24
};

person.name='Rocky';
console.log(person);
person['name'] = 'Sahu';
console.log(" Post single quote " + person);
person['name'] = 'SahuWithout Quote';
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

let value = 'sajan';
console.log(value);
changeValue(value);
function changeValue(str){
    console.log(str);
    str='sahu';
    console.log(str);
}
console.log(value);


let value1 = 5;
console.log(value);
changeValue(value);
function changeValue(str){
    console.log(str);
    str=6;
    console.log(str);
}
console.log(value);


