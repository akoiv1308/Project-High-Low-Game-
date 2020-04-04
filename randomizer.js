let targetNum;

targetNum = Math.floor((Math.random() * 20) + 1);

function checkValue() {
 let result = parseInt($(".form-control").val())


 if ( result > targetNum){
   $("#result").css("color","red");
   $("#result").text("Too High! This student does not receive a prize.");
 } 
 else if (result < targetNum){
   $("#result").css("color","red");
   $("#result").text("Too Low! This student does not receive a prize.");
 } 
 else if(result == targetNum) {
   $("#result").css("color","green");
   $("#result").text("Correct! This student gets the prize.");
 }
 else if (result > targetNum + 5 || result < targetNum - 5) {
    $("#result").text("Realy close");
 }
 else if (result < targetNum - 20 || result > targetNum + 20) {
    $("#result").text("Close!");
 }
 else if(targetNum>result||result>targetNum){
    $("#result").text("Too much!");
 }
 else {
   $("#result").text("Please re input with an actual number");
  }
  
}