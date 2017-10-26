//define functions here
function getIt() {
  window.alert("Hey!");
}


function frameIt() {
  $('img').on('load',function() {
    $('img').addClass("tasty");
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which==71) {
      window.alert("You pressed G")
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
