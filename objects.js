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
