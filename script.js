// DOM ELEMENTS
var nounEl1 = document.getElementById('noun1');
var nounEl2 = document.getElementById('noun2');
var nounEl3 = document.getElementById('noun3');
var verb1 = document.getElementById('verb1');
var verb2 = document.getElementById('verb2');
var verb3 = document.getElementById('verb3');
var verb4 =  document.getElementById('verb4');
var adjective1 = document.getElementById('adjective1');
var adjective2 = document.getElementById('adjective2');
var button = document.getElementById('submit');
// EVENT LISTENER FOR SUBMIT
button.addEventListener('click', handleSubmit);

// Submit function when user clicks button
function handleSubmit(e){
    e.preventDefault();
    var userNoun1 = document.getElementById('noun1User').value;
    var userNoun2 = document.getElementById('noun2User').value;
    var userNoun3 = document.getElementById('noun3User').value;
    var userVerb1 = document.getElementById('verb1User').value;
    var userVerb2 = document.getElementById('verb2User').value;
    var userVerb3 = document.getElementById('verb3User').value;
    var userVerb4 = document.getElementById('verb4User').value;
    var userAdjective1 = document.getElementById('adjective1User').value;
    var userAdjective2 = document.getElementById('adjective2User').value;
    nounEl1.textContent = userNoun1;
    nounEl2.textContent = userNoun2;
    nounEl3.textContent = userNoun3;
    verb1.textContent = userVerb1;
    verb2.textContent = userVerb2;
    verb3.textContent = userVerb3;
    verb4.textContent = userVerb4;
    adjective1.textContent = userAdjective1;
    adjective2.textContent = userAdjective2;
}

