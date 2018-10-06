$(document).ready(function() {
  $("#add_1").click(function() {
    var currentScore = parseInt($("#score_1").text()) + 1;
    $("#score_1").text(currentScore);
  });

  $("#sub_1").click(function() {
    var currentScore = parseInt($("#score_1").text()) - 1;
    if(currentScore >= 0)
      $("#score_1").text(currentScore);
  });

  $("#add_2").click(function() {
    var currentScore = parseInt($("#score_2").text()) + 1;
    $("#score_2").text(currentScore);
  });

  $("#sub_2").click(function() {
    var currentScore = parseInt($("#score_2").text()) - 1;
    if(currentScore >= 0)
      $("#score_2").text(currentScore);
  });

  $("input").click(function() {
    $("#score_1").text("0");
    $("#score_2").text("0");
  })
})
