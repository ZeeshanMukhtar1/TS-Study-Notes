// Variables
let age: number = 21;
const Fistname: string = 'kamran';
let isAdult: boolean = true;

// Arrays
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ['kamran', 'Zeeshan', 'Joe'];
const mixedArray: (number | string | boolean)[] = [1, 'kamran', true];

// Tuples
const person: [string, number, boolean] = ['kamran', 27, true];

// Enums
enum Color {
  RED,
  GREEN,
  BLUE,
}
const myColor: Color = Color.GREEN;

// Objects
const personObj: { name: string; age: number; isAdult: boolean } = {
  name: 'kamran',
  age: 27,
  isAdult: true,
};
//  functions
function calculateRectangleArea(length: number, width: number): number {
  return length * width;
}

const rectangleLength = 5;
const rectangleWidth = 3;

const area = calculateRectangleArea(rectangleLength, rectangleWidth);

console.log(`The area of the rectangle is ${area}`);
