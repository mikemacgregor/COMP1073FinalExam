// json file of crazy things
let requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';

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
    img.setAttribute('src', 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/assets/' + cats[i].photo);
    img.setAttribute('alt', cats[i].name);

    h3.textContent = cats[i].name;
    p.textContent = cats[i].species;

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(p);

    content.appendChild(div);

  }
}
