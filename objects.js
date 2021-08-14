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