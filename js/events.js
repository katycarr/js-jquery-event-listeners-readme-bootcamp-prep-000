//define functions here
function getIt() {
  window.alert("Hey!");
}


function frameIt() {
  $('img').on('load',function() {
    $('img').class = "tasty";
  })
}

function pressIt() {
  $('document').on('keydown', function(key) {
    if(key.which==71) {
      alert("You pressed G")
    }
  })
}

function submitIt() {
  window.alert("Your form is going to be submitted now.")
}

$(document).ready(function(){
// call functions here
$('p').on('click',getIt);

frameIt();

pressIt();

$('form').on('submit',submitIt);

});
