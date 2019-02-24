$(document).ready(function(){
  $("#question-board").submit (function(){
  var qOne = $("input:radio[name=q1]:checked").val();
  var qTwo = $("input:radio[name=q2]:checked").val();
  var qThree = $("input:radio[name=q3]:checked").val();
  var qFour = $("input:radio[name=q4]:checked").val();
  var qFive = $("input:radio[name=q5]:checked").val();
  var Result = 0;
  if (qOne ==="correct"){
    Result += 20;
  }
  else {
    Result +=0;
  }
  if (qTwo ==="correct"){
    Result += 20;
  }
  else {
    Result +=0;
  }
  if (qThree ==="correct"){
    Result += 20;
  }
  else {
    Result +=0;
  }
  if (qFour ==="Inline element"){
    Result += 20;
  }
  else {
    Result +=0;
  }
  if (qFive ==="remainder"){
    Result += 20;
  }
  else {
    Result +=0;
  }
alert(Result);
});
});
