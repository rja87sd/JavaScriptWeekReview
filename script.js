"use strict";

// Grab or declare globals
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
let counter = 0;
const nums = [1, 2, 3, 4, 5];
const message = document.querySelector("#message");
const myArray1 = [1, 2, 3];
const myArray2 = myArray1;
let myNum1 = 5;
let myNum2 = myNum1;

// Write code to append the submitted form data as a list item in an unordered list on the page when the form is submitted.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const name = e.target.name.value;
  const age = e.target.age.value;
  li.innerText = `Name: ${name} Age: ${age}`;
  ul.appendChild(li);
});

// Use a for loop to display each color as a separate paragraph on the page.
for (let i = 0; i < colors.length; i++) {
  const p = document.createElement("p");
  p.innerText = colors[i];
  message.appendChild(p);
}

// Implement a while loop that adds paragraphs to the page while a counter is less than 5, each paragraph displaying the counter's current value.
while (counter < 5) {
  const p = document.createElement("p");
  p.innerText = `Count: ${counter + 1}`;
  message.appendChild(p);
  counter++;
}

// Use the map method to double each number, the filter method to keep only even numbers, and the forEach method to display each number from the filter operation as a list item.
const newNums = nums.map((number) => number * 2);
const odds = nums.filter((number) => number % 2 !== 0);

function forEachMethod() {
  odds.forEach((number) => {
    const li = document.createElement("li");
    li.innerText = number;
    ul.appendChild(li);
  });
}
forEachMethod();

// Demonstrate the difference between copying primitive and reference types. Show this by creating and manipulating variables of each type, and displaying the results on the page (e.g., copy and change an array vs a number).
myArray1.push("New Value");
console.log(myArray2);

myNum1 = 10;
console.log(myNum2);
