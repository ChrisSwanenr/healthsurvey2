$(document).ready(function() {
  $("form#stressSurvey").submit(function(event) {

  var resultArray = [];

  $("#stressSurvey").hide();
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

  if (result === -5) {
    $("#stressBuddha").show();
  } else if (result <= 0){
    $("#stress0").show();
  } else if (result <= 5){
    $("#stress5").show();
  } else if (result <= 9){
    $("#stress9").show();
  } else if (result === 10){
    $("#stressMidnight").show();
  }

  event.preventDefault();
  });
});
