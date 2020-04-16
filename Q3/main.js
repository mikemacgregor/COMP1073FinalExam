// json file of crazy things // had to switch to json file hosted on my account because of invalid character at line 1
let requestURL = 'https://mikemacgregor.github.io/COMP1073FinalExam/Q3/cats.json';

// button on the page with event listener to trigger fetchAll
let button = document.querySelector('button');
button.addEventListener('click', fetchAll);

function fetchAll() {
  fetch(requestURL).then(function(response) { // initial request, receive response
    return response.json();
  }).then(function(json) {
    cats = json; // response to a json object
  }).then(function() {
    showMeCats(cats); // call function to display info from json object
  }).catch(function(err) {
    console.log('Fetch problem: ' + err.message);
  });
}

// display the info
function showMeCats(jsonObj) {
  let cats = jsonObj.cats;
  let content = document.getElementById('content');
  // clear existing content
  content.innerHTML = "";
  for(let i = 0; i < cats.length; i++) {

    // build HTML
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let img = document.createElement('img');

    div.setAttribute('class', 'col');
    let photoLink = cats[i].photo.replace('github.com', 'raw.githubusercontent.com');
    photoLink = photoLink.replace('/blob/', '/');
    img.setAttribute('src', photoLink);
    img.setAttribute('alt', cats[i].name);

    h3.textContent = cats[i].name;
    p.innerHTML = "species: " + cats[i].species + "<br>age: " + cats[i].age + "<br>favourite foods: " + cats[i].favFoods;

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(p);

    content.appendChild(div);

  }
}
