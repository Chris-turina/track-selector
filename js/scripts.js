$(document).ready(function(){

  // form1 function
  $("button#button1").click(function(){
    $("form#question1").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=q1]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=q2]:checked").val());
      var scoreThree = parseInt($("input:radio[name=q3]:checked").val());
      var scoreFour = parseInt($("input:radio[name=q4]:checked").val());
      var scoreFive = parseInt($("input:radio[name=q5]:checked").val());
      event.preventDefault();
    });
    // form2 function
    $("form#question2").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=q1]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=q2]:checked").val());
      var scoreThree = parseInt($("input:radio[name=q3]:checked").val());
      var scoreFour = parseInt($("input:radio[name=q4]:checked").val());
      var scoreFive = parseInt($("input:radio[name=q5]:checked").val());
      event.preventDefault();
    });

  // form3 function
    $("form#question3").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=q1]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=q2]:checked").val());
      var scoreThree = parseInt($("input:radio[name=q3]:checked").val());
      var scoreFour = parseInt($("input:radio[name=q4]:checked").val());
      var scoreFive = parseInt($("input:radio[name=q5]:checked").val());
      event.preventDefault();
    });

  // form4 function

    $("form#question4").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=q1]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=q2]:checked").val());
      var scoreThree = parseInt($("input:radio[name=q3]:checked").val());
      var scoreFour = parseInt($("input:radio[name=q4]:checked").val());
      var scoreFive = parseInt($("input:radio[name=q5]:checked").val());
      event.preventDefault();
    });

  //form5 function

    $("form#question5").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=q1]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=q2]:checked").val());
      var scoreThree = parseInt($("input:radio[name=q3]:checked").val());
      var scoreFour = parseInt($("input:radio[name=q4]:checked").val());
      var scoreFive = parseInt($("input:radio[name=q5]:checked").val());
      event.preventDefault();

    var fullName = $("input#name").val();
    //start of var if
    var totalScore = scoreOne + scoreTwo + scoreThree + scoreFour +scoreFive;
      if (totalScore <= 8 || totalScore === 8) {
        var output = "css-desgin"
        $(".name").text(fullName);
        $("#css-desgin").show();
        $("#answer").show();
      } else if (totalScore >=9 && totalScore <= 12) {
        var output = "java-android"
        $(".name").text(fullName);
        $("#java-android").show();
        $("#answer").show();
      } else if (totalScore >=13 && totalScore <= 15) {
        var output = "csharp-net"
        $(".name").text(fullName);
        $("#csharp-net").show();
        $("#answer").show();
      }
    });
  });

  //css-desgin
  $(".clickable").click(function(){
    $("#css-pic-hidden").fadeToggle();
    $("#css-pic-showing").fadeToggle();
  });
});
