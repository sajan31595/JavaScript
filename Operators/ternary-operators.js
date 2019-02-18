console.log('Welcome to Ternary operator');

let points= 100;
let type= points>=100 ? 'gold':'silver';
console.log(type);

let highIncome = true;
let goodCreditScore =true;

let isElligibleforLoan = highIncome&&goodCreditScore;
console.log(isElligibleforLoan);
let isApplicationRefused = !isElligibleforLoan;
console.log(isApplicationRefused);


//Bitwise OR and AND
console.log('Bitwise opearators start');
console.log(1 |2 );
console.log(1 & 2);