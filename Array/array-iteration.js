const numbers = [2,5,8,5,4];
for(let number of numbers){
    console.log(number);
}

console.log("ForEach");
numbers.forEach(function(number){
    console.log(number);
});

console.log('Arrow');
numbers.forEach(element => console.log(element));

console.log('Arrow with Index');
numbers.forEach((element,index) => console.log(index,element));

//Joining with a separator
let joined = numbers.join('~');
console.log(joined);

//Sorting an Array
console.log(numbers.sort());


//Sorting reference type 
const courses = [
    {id : 3,course : 'CD',emai:true},
    {id : 1,course : 'CS',emai:true},
    {id : 2,course : 'AB',emai:false}
];

console.log(courses);
courses.sort(function(element1,element2){
    return element1.id>element2.id?-1:1;
});
console.log(courses);

//reduce function to add the numbers of array
let accumulator = numbers.reduce(function(acc,current){
    return acc+current
},0);
console.log(accumulator);

console.log("Setting to first number");
accumulator = numbers.reduce(
    (acc,current) => acc+current
);
console.log(accumulator);