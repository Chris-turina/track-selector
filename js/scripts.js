$(document).ready(function(){

  // button1 function
  $("button#button1").click(function(){
    $("form#question1").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=things]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=room]:checked").val());
      event.preventDefault();
    });
  });
  //button2 function
  $("button#button2").click(function(){
    $("form#question2").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=things]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=room]:checked").val());
      event.preventDefault();
    });
  });
});
