// JavaScript Document

let main = document.querySelector('main');
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body'); // typo in document

submitButton.addEventListener('click', function(e) { // properly identify as click event
  e.preventDefault(); // prevent form submission on submit button click that refreshes the page
  let input = document.querySelector('input[type="text"]'); // need to select text box to get name the user input
  let personName = input.value;
  let para = document.createElement('p');
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; // this is weird putting an h3 inside a p tag but it works
  main.appendChild(para); // para is the variable created, not paragraph
  body.setAttribute('class', 'meow');
  console.log('=^..^=');
});
