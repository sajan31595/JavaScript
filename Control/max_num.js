let numa=5;
let numb=10;
console.log("Finding out the maximum number");
let answer = max_number(numa,numb);
console.log("The anser is : ",answer);
console.log("The maximum between the given number ",numa," and ",numb, " is : ",numa>numb?numa:numb);

function max_number(numa,numb){
    return (numa>numb?numa:numb);
}