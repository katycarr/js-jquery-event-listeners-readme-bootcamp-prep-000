//define functions here
function getIt() {
  window.alert("Hey!");
}

function frameIt() {
  $('img').class = tasty;
}

function pressIt(key) {
  if(key.which===71) {
    window.alert("You pressed G!")
  }
}

function submitIt() {
  window.alert("Your form is going to be submitted now.")
}

$(document).ready(function(){
// call functions here
$('p').on('click',getIt);

$(document).on('load',frameIt);

$('input').on('keydown',pressIt);

$('form').on('submit',submitIt);

});
