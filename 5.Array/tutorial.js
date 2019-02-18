console.log('Into Arrays Lecture');
const numbers = [2,3,4];
console.log(numbers);


//Appending numbers at the end
numbers.push(3,5,6);
console.log(numbers);

//Appending numbers at the start of an array
numbers.unshift(3,5,6);
console.log(numbers);


//removes th number of numbers from a specific index 
//and adds the number at the position
numbers.splice(3,2,'6',7,'8');
console.log(numbers);

//Removing elements fron Array

//pop->removes the last element
numbers.pop();
//Shift ->removes the first element
numbers.shift();

console.log(numbers);

//finding an element in a array
console.log(numbers.indexOf(6));


//Finding Elements in a reference type
const courses = [
    { id : 1, name : 'CS', exam : true },
    { id : 2, name : 'MOS',exam : false}
];
console.log(courses);

//So it'll return the first element passed to the function
const courses1 = courses.find(function(element){
    return element.id==1;
});
console.log(courses1);

//IT'll return the first index of the elements of which has an element with id=1
let courses2 = courses.find(function(element){
    return element.id==1;
});
console.log(courses2);

//Arrow function
console.log('Arrow function');
courses2 = courses.find(element => element.id==2);
console.log(courses2);



//Empty an array

let nums = [2,35,8,9];
//nums=[];
//nums.length = 0;
//nums.splice(0,nums.length);
while(nums.length){
    nums.pop();
    console.log(nums);
}
