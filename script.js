'use strict';

const message = document.querySelector('#message');
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

const ul = document.querySelector('ul');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    const name = e.target.name.value;
    const age = e.target.age.value;
    li.innerText = `Name: ${name} Age: ${age}`;
    ul.appendChild(li);
});