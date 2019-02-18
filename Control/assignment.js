const output = fizzbuzz('Sajan');
console.log(output);

const speed = checkSpeed(94);
console.log(speed);

oddEven(10);


function fizzbuzz(input){
    if(input%15==0) return 'fizzbuzz';
    else if(input%5==0) return 'Buzz';
    else if(input%3==0) return 'Fizz';
    else if(input%1==0) return input;
    else return 'Not A number';
}

function checkSpeed(input){
    let speedLimit=70;
    if(input <= speedLimit) return 'Ok';
    else if(input>speedLimit){
        if(input-speedLimit>60) return 'Licence Expired';
        else return Math.floor((input-speedLimit)/5);
    }
}

function oddEven(input){
    for(let i=0;i<input;i++){
        if(i%2==0) console.log('Even');
        else console.log('Odd');
    }
}

const array = [1, 2, 3, 0, null, undefined];
console.log(countTruthy(array));

function countTruthy(input){
    let count=0;
    for(let key of input){
        if(key) count++;
    }
    return count;
}

const movie = {
    name :'Sajan',
    actor:'Sajan',
    direcotor:'Sajan',
    reating:4,
    review:3.5
};
properties(movie);
function properties(input){
    for(key in input){
        if(typeof(input[key])=='string') 
        console.log(key,input[key]);
    }
}
//Calculating grade of a Student
console.log("Calculating grade of a Student");
let marks = [80,70,60];
console.log(calculateGrade(marks));
function calculateGrade(marks){
    let total=0;
    let count =0;
    for (mark of marks){
        total=total+mark;
        count++;
    }
    console.log('Total : ',total);
    let averageTotal=total/count;
    if(averageTotal<59) return 'F';
    else if(averageTotal<69) return 'D';
    else if(averageTotal<79) return 'C';
    else if(averageTotal<89) return 'B';
    else if(averageTotal<99) return 'A';
}

//Printing Stars
displayStars(5);
function displayStars(no){
    for(let i=0;i<no;i++){
        let pattern='';
        for(let j=0;j<i;j++){
            pattern+='*';
        }
        console.log(pattern);
    }
}

//Calcukate the prime numbers of between 1 and the given number

displayPrimenumbers(20);
function displayPrimenumbers(no){
    for(let i=1;i<=no;i++){
        if(!isPrimeNumber(i)) console.log(i);
    }
}
function isPrimeNumber(number){
    for(let i=2;i<number;i++){
        if(number%i==0) return true;
    }
    return false;
}