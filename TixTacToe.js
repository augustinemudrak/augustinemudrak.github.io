//  var playerOne = function playerOne(Name){
//  	$("playerOneButton").click(function(event){
//  		$("<h1>").text("") = $("#playerOneInput").val()})
// }
console.log("linked?");

$("#playerOneButton").click(function(){
 		$("#playerOneName").text($("#playerOneInput").val());
 		$("#playerOneInput").hide();
 		$("#playerOneButton").hide();
 	})

$("#playerTwoButton").click(function(){
 		$("#playerTwoName").text($("#playerTwoInput").val());
 		$("#playerTwoInput").hide();
 		$("#playerTwoButton").hide();
 	})