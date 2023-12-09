/*
 * Filename: sophisticated_code.js
 * Description: Complex and elaborate JavaScript code
 * Author: [Your Name]
 * Date: [Date]
 */

// Helper function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Class representing a Circle
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }
}

// Function to find the nth Fibonacci number
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    let temp = curr;
    curr += prev;
    prev = temp;
  }
  return curr;
}

// Class representing a User
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Function to find the LCM of two numbers
function lcm(a, b) {
  let max = Math.max(a, b);
  while (true) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  }
}

// Complex algorithm to generate unique random numbers
function generateUniqueRandomNumbers(maxRange, count) {
  let randomNumbers = [];

  while (randomNumbers.length < count) {
    let randomNumber = Math.floor(Math.random() * maxRange) + 1;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
}

// Example usage of the above functions and classes
let myCircle = new Circle(5);
console.log('Area:', myCircle.area);
console.log('Circumference:', myCircle.circumference);

console.log('Factorial of 5:', factorial(5));
console.log('7th Fibonacci number:', fibonacci(7));
console.log('LCM of 12 and 18:', lcm(12, 18));

let user = new User('John Doe', 25);
user.sayHello();

let randomNumbers = generateUniqueRandomNumbers(100, 10);
console.log('Unique random numbers:', randomNumbers);