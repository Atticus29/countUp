var to;
var by;
var mult = [];


var checkType = function(variable){
  if(typeof variable === "number"){
    return true;
  } else{
    alert(variable + " is not a number");
    return false;
  }
}

$(function(){
  $("#numberInput").submit(function (){
    event.preventDefault();
    var to = parseInt($("#to").val());
    var by = parseInt($("#by").val());
    // console.log(to, by);
    if ((to && by) && to>=0 && by>=0 && checkType(to) && checkType(by) ){
      // console.log("Go into the if statement");
      var x = by;
      // console.log("x is " + x);
      for(var i=1; i <= to/by; i++){
        // console.log("i is " + i);
        var y = x*i;
        // console.log("y is " + y);
        mult.push(y);
        // console.log(mult[i-1]);
        $(".results").append("<li>" + mult[i-1] + "</li>");
      }
      console.log(mult);
    }
  });
});
