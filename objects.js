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