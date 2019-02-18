//Create an Address object and have a method to print he Address
function Address(street,city,zipcode){
    this.street=street;
    this.city = city;
    this.zipcode = zipcode;
    this.printAddress = function(){
        console.log('Street :',this.street);
        console.log('city :',this.city);
        console.log('zipcode :',this.zipcode);
    }
}

const address = new Address('Pune','Hadapsar',412308);
address.printAddress();

function Address1(street,city,zipcode){
    this.street=street;
    this.city = city;
    this.zipcode = zipcode;
}

const address1 = new Address1('Bombay','Hadapsar',412308);
const address2 = new Address1('Nasik','Hadapsar',412308);

function areEqual(address1,address2){
    console.log('Checking whether the two object are same or not');
    for(key in address1){
        console.log(address1[key],address2[key]);
        if(address1[key]==address2[key])
        console.log(key,'Are same');
    }
}
areEqual(address1,address2);


//Books and Author
const post = {
    title: 'Sajan',
    author: 'Sajan Sahu',
    views: 10,
    body: 'Body',
    comments:[
        {title:'New2',body:'B2'},
        {title:'New3',body:'B3'}
    ],
    isLive:true
};

function Comment(title,body){
    this.title=title;
    this.body=body;
};
const comment1 = new Comment('New2','B2');
const comment2 = new Comment('New3','B3');

const comments=[comment1,comment2];

function Post(comments){
    this.title='Sajan';
    this.author='Sajan Sahu';
    this.views=10;
    this.body='Body';
    this.comments = comments;
}
const post1 = new Post(comments);