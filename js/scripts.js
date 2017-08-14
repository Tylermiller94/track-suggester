$(document).ready(function(){
  $(".questions").submit(function(event){
    var q1input = parseInt($("input:radio[name=q1]:checked").val());
    var q2input = parseInt($("input:radio[name=q2]:checked").val());
    var q3input = parseInt($("input:radio[name=q3]:checked").val());
    var q4input = parseInt($("input:radio[name=q4]:checked").val());
    var q5input = parseInt($("input:radio[name=q5]:checked").val());

    var result = q1input + q2input + q3input + q4input + q5input;

    if (result <= 5){
      $("#csharp").show();
      $("#java").hide();
      $("#ruby").hide();
    } else if (result > 5 && result <= 10){
      $("#csharp").hide();
      $("#java").show();
      $("#ruby").hide();
    } else if (result > 10 && result <= 15){
      $("#csharp").hide();
      $("#java").hide();
      $("#ruby").show();


    event.preventDefault();
  });
});
