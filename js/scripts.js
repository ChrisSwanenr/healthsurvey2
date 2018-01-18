$(document).ready(function() {
  $("form#stressSurvey").submit(function(event) {
  event.preventDefault();

  var resultArray = [];

  $("#stressSurvey").slideUp();
  $("input:checkbox[name=warningSigns]:checked").each(function() {
    var warningResult = parseInt($(this).val());
    resultArray.push(warningResult);
  });

  $("input:checkbox[name=symptoms]:checked").each(function() {
    var symptomResult = parseInt($(this).val());
    resultArray.push(symptomResult);
  });

  $("input:checkbox[name=copingMethods]:checked").each(function() {
    var copingResult = parseInt($(this).val());
    resultArray.push(copingResult);
  });

  var result = resultArray.reduce(function (a, b) {
    return a + b;
  });
  alert(result);
  if (result === -5) {
    $("#stressBuddha").slideDown();
    $("body").addClass("buddha");
  } else if (result <= 0){
    $("#stress0").slideDown();
  } else if (result <= 3){
    $("#stress3").slideDown();
  } else if (result <= 6){
    $("#stress6").slideDown();
  } else if (result <= 9){
    $("#stress9").slideDown();
  } else if (result === 10){
    $("#stressMidnight").slideDown();
    $("body").addClass("scary");
  }

  $(".retake").click(function() {
    $("#stressBuddha").slideUp();
    $("#stress0").slideUp();
    $("#stress3").slideUp();
    $("#stress6").slideUp();
    $("#stress9").slideUp();
    $("#stressMidnight").slideUp();
    $("#stressSurvey").slideDown();
    $("body").removeClass("scary");
    $("body").removeClass("buddha");
    });
  });
});
