
let landScape = isLandScape(100,50);
console.log("Printing between Lanscape and Portarait");
console.log(landScape);


function isLandScape(width,height){
    return width > height ? true : false;
}