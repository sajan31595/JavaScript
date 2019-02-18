const circle = {
    radious: 1,
    position: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw:function(){
        console.log('Draw');
    },
    move: function(){
        console.log('Move');
    }
};
circle.draw();//Function of a object is called a method
circle.move();

//Factory functions
function createCircle(){
    const circle = {
        radious: 1,
        position: {
            x: 1,
            y: 1
        },
        isVisible: true,
        draw:function(){
            console.log('Draw');
        },
        move: function(){
            console.log('Move');
        }
    };
    return circle;
}
circle2 =  createCircle();
circle2.draw();
circle2.move();

function createCircle1(){
    return {
        radious: 1,
        position: {
            x: 1,
            y: 1
        },
        isVisible: true,
        draw:function(){
            console.log('Draw');
        },
        move: function(){
            console.log('Move');
        }
    };
}
console.log("Circle 3")
circle3 =  createCircle1();
circle3.draw();
circle3.move();

function createCircle4(radious){
    return {
        radious: radious,
        isVisible: true,
        draw:function(){
            console.log('Draw');
        },
        move: function(){
            console.log('Move');
        }
    };
}
console.log("----Circle 4")
circle4 =  createCircle1(2);
circle4.draw();
circle4.move();
circle4.color='Yellow';
console.log(circle4.color);
circle4.addColor =function(){
    circle4.color='Green';
    console.log('Adding colour to circle');
    console.log(circle4.color);
}
console.log(circle4.color);



//Costructor Function
function Circle(radious){
    this.radious=radious;
    this.draw=function(){
        console.log('Inside Constructor Funcrtion');
    }
    this.setCircle=function(){
        console.log('Circle 5')
    }
}
const circle5 = new Circle(5);
circle5.setCircle();
circle5.draw();

console.log('Printing key and values of Circle 5')
for(let key in circle5){
    console.log(key,circle5[key]);
}