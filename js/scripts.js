$(document).ready(function(){

  // button1 function
  $("button#button1").click(function(){
    $("form#question1").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=q1]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=q2]:checked").val());
      var scoreThree = parseInt($("input:radio[name=q3]:checked").val());
      var scoreFour = parseInt($("input:radio[name=q4]:checked").val());
      var scoreFive = parseInt($("input:radio[name=q5]:checked").val());
      event.preventDefault();
    });
  });
  // button2 function
  $("button#button2").click(function(){
    $("form#question2").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=q1]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=q2]:checked").val());
      var scoreThree = parseInt($("input:radio[name=q3]:checked").val());
      var scoreFour = parseInt($("input:radio[name=q4]:checked").val());
      var scoreFive = parseInt($("input:radio[name=q5]:checked").val());
      event.preventDefault();
    });
  });
  // button3 function
  $("button#button3").click(function(){
    $("form#question3").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=q1]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=q2]:checked").val());
      var scoreThree = parseInt($("input:radio[name=q3]:checked").val());
      var scoreFour = parseInt($("input:radio[name=q4]:checked").val());
      var scoreFive = parseInt($("input:radio[name=q5]:checked").val());
      event.preventDefault();
    });
  });
  // button4 function
  $("button#button4").click(function(){
    $("form#question4").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=q1]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=q2]:checked").val());
      var scoreThree = parseInt($("input:radio[name=q3]:checked").val());
      var scoreFour = parseInt($("input:radio[name=q4]:checked").val());
      var scoreFive = parseInt($("input:radio[name=q5]:checked").val());
      event.preventDefault();
    });
  });
  //button5 function
  $("button#button5").click(function(){
    $("form#question5").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=q1]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=q2]:checked").val());
      var scoreThree = parseInt($("input:radio[name=q3]:checked").val());
      var scoreFour = parseInt($("input:radio[name=q4]:checked").val());
      var scoreFive = parseInt($("input:radio[name=q5]:checked").val());
      event.preventDefault();

    //start of var if
    var totalScore = scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive;
      if (totalScore === 5) {
        var output = "You should take the CSS-Desgin course"
        $("#css-desgin").show();
        $("output").text(output);
      } else if (totalScore >= 6 && totalScore <= 11) {
        var output = "You should take the C# .NET course"
        $("java-android").show();
        $("output").text(output);
      } else if (totalScore >= 11 && totalScore <= 15) {
        var output = "You should take the C# .NET course"
        $("#csharp-net").show();
        $("output").text(output);
      }
    });
  });
});
