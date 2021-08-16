const bicycle = {
    color: 'blue',
    type: 'mountain bike',
    wheels: {
      diameter: 18,
      width: 8
    }
  };

console.log(bicycle.color);
console.log(bicycle['color']);
console.log(bicycle.wheels.width);
console.log(bicycle['wheels']['width']);
const myVariable = 'color';
console.log(bicycle[myVariable]); // good
console.log(bicycle.myVariable); // returns undefined

//Modifying Properties
const cat = {
    age: 2,
    name: 'Bailey',
    meow: function(){
        console.log('Meow!');
    },
    greet: function(name){
        console.log(`Hello ${name}`);
    }
};

cat.age += 1;
console.log(cat.age); //3
cat.name = 'Bambi';
console.log(cat.name);
console.log(cat.greet(cat.name));
console.log(cat);

//Adding properties
const printer = {};
printer['on'] = true;
printer['mode'] = 'black and white';
printer['remainingSheets'] = 168;
printer['print'] = function(){
    console.log('printer is printing!');
}
console.log(printer);

//removing properties
console.log(delete printer.mode);
console.log(printer);

//passing an object
//if you pass an object into a function, Javascript passes a reference to that object.
let originalObject = {
    favoriteColor : 'red'
};

function setToBlue(object){
    object.favoriteColor = 'blue';
}
setToBlue(originalObject);
console.log(originalObject.favoriteColor);

//re-assigning an object to a new variable, and then changing that copy.
const iceCreamOriginal = {
    Andrew : 3,
    Richard : 15
}
const iceCreamCopy = iceCreamOriginal;
console.log(iceCreamCopy.Richard);
iceCreamCopy.Richard = 99;
console.log(iceCreamCopy.Richard, iceCreamOriginal.Richard);

//comparing objects
const parrot = {
    group: 'bird',
    feathers: true,
    chirp: function () {
      console.log('Chirp chirp!');
    }
  };
  
  const pigeon = {
    group: 'bird',
    feathers: true,
    chirp: function () {
      console.log('Chirp chirp!');
    }
  };
  console.log(parrot === pigeon); // returns false
  const myBird = parrot;
  console.log(myBird === parrot); // returns true
  console.log(myBird === pigeon); // returns false

  //calling Methods
  const developer = {
      name : 'Andrew'
  };
  //add method
  developer['sayHello'] = function() {
      console.log("Hi there!");
  }
  console.log(developer);
  developer.sayHello();
  developer['sayHello']();

  //passing arguments into methods
  developer.favoriteLanguage = function(language) {
      console.log(`My favorite programming language is ${language}`);
  };
  
  console.log(developer.favoriteLanguage('JavaScript'));

  //invoking object menthods
  const myArray = [function alerter() {console.log('Hello');}];
  console.log(myArray[0]());
  const bell = {
    color: 'gold',
    ring: function () {
      console.log('Ring ring ring!');
    }
  };
  console.log(bell.ring());

  //Using this, methods can directly access the object that it is called on
  const triangle = {
    type: 'scalene',
    identify: function () {
      console.log(`This is a ${this.type} triangle.`);
    },
    whatIsThis: function(){
        console.log(this);
    }
  };
  triangle.identify();
  triangle.whatIsThis();
/*

Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
    if it is 'green', or to 'green' if it is 'pink'

*/
const chameleon = {
    color: 'green',
    changeColor: function() {
        if(this.color === 'green'){
            this.color = 'pink';
        } else {
            this.color = 'green';
        }
        return this.color;
    }
};
console.log(chameleon.changeColor());