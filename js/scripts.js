$(document).ready(function() {
  $("form#stressSurvey").submit(function(event) {
  var add = function(array) {
    return n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + n13 + n14 + n15;
  }
  var resultArray = [];
  var warningArray = [];
  var symptomArray = [];
  var copingArray = [];

  $("#stress-responses").show();
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
  event.preventDefault();
  });
});
