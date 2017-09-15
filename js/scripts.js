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

    var totalScore = scoreOne + scoreTwo;
      if (totalScore === 2) {
        var output = "You should take the CSS-Desgin course"
        $("#css-desgin").show();
        $("output").text(output);
      } else if (totalScore >= 3 && totalScore <= 5) {
        var output = "You should take the C# .NET course"
        $("#csharp-net").show();
        $("output").text(output);
      }
    });
  });
});
