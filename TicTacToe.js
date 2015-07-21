//  var playerOne = function playerOne(Name){
//  	$("playerOneButton").click(function(event){
//  		$("<h1>").text("") = $("#playerOneInput").val()})
// }
 $(".fritzWins").hide();
 $(".sungWins").hide();
 $(".tie").hide();
var i = 0;
var gameArray= [[0,0,0],
				[0,0,0],
				[0,0,0]];
 //// Player Name Input
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
	//Counter for function

	var counter= function counter(row, colum){
		if (i%2 === 0) {	
		i= i+1;
		console.log("X");
		gameArray[row][colum]= 1;
		gameChecker();
		return "url('./Fritz.jpg')";
		} else {
		  i= i+1;
		  console.log("Y");
		  gameArray[row][colum] = 2;
		gameChecker();
		  return "url('./Sung.jpg')";
		}
	}
	//How to change a back ground image
$("#0").click(function(){
	console.log("hey man");
	$('#0').css('background-image', counter(0, 0));
	$('#0').css("background-size" , "cover");
})
$("#1").click(function(){
	console.log("something came in the mail today");
	$('#1').css('background-image', counter(0, 1));
	$('#1').css('background-size' , 'cover');
})
$("#2").click(function(){
	console.log("oh word?");
	$('#2').css('background-image', counter(0,2));
	$('#2').css('background-size' , 'cover');
})
$("#3").click(function(){
	console.log("what came in the mail?");
	$('#3').css('background-image', counter(1,0));
	$('#3').css('background-size' , 'cover');
})
$("#4").click(function(){
	console.log("......");
	$('#4').css('background-image', counter(1,1));
	$('#4').css('background-size' , 'cover');
})
$("#5").click(function(){
	console.log("..........");
	$('#5').css('background-image', counter(1,2));
	$('#5').css('background-size' , 'cover');
})
$("#6").click(function(){
	console.log("............");
	$('#6').css('background-image', counter(2,0));
	$('#6').css('background-size' , 'cover');
})
$("#7").click(function(){
	console.log("deezzz nuts");
	$('#7').css('background-image', counter(2,1));
	$('#7').css('background-size' , 'cover');
})
$("#8").click(function(){
	console.log("HA gottem");
	$('#8').css('background-image', counter(2,2));
	$('#8').css('background-size' , 'cover');
})
///checks for winner
var gameChecker = function gameChecker () {
	if (gameArray[0][0] === 1 && gameArray[0][1] === 1 && gameArray [0][2] === 1) {
		 console.log("yolo");
		 return $(".fritzWins").show();
	} else if (gameArray[1][0] === 1 && gameArray[1][1] === 1 && gameArray [1][2] === 1) {
		return $(".fritzWins").show();
	} else if (gameArray[2][0] === 1 && gameArray[2][1] === 1 && gameArray [2][2] === 1) {
		return	$(".fritzWins").show();
	} else if (gameArray[0][0] === 1 && gameArray[1][0] === 1 && gameArray [2][0] === 1) {
		return	$(".fritzWins").show();
	} else if (gameArray[0][1] === 1 && gameArray[1][1] === 1 && gameArray [2][1] === 1) {
		return $(".fritzWins").show();
	} else if (gameArray[0][2] === 1 && gameArray[1][2] === 1 && gameArray [2][2] === 1) {
		return $(".fritzWins").show();
	} else if (gameArray[0][0] === 1 && gameArray[1][1] === 1 && gameArray [2][2] === 1) {
		return $(".fritzWins").show();
	} else if (gameArray[2][0] === 1 && gameArray[1][1] === 1 && gameArray [0][2] === 1) {
		return $(".fritzWins").show();
	} else if (gameArray[0][0] === 2 && gameArray[0][1] === 2 && gameArray [0][2] === 2) {
		return $(".sungWins").show();
	} else if (gameArray[1][0] === 2 && gameArray[1][1] === 2 && gameArray [1][2] === 2) {
		return $(".sungWins").show();
	} else if (gameArray[2][0] === 2 && gameArray[2][1] === 2 && gameArray [2][2] === 2) {
		return $(".sungWins").show();
	} else if (gameArray[0][0] === 2 && gameArray[1][0] === 2 && gameArray [2][0] === 2) {
		return $(".sungWins").show();
	} else if (gameArray[0][1] === 2 && gameArray[1][1] === 2 && gameArray [2][1] === 2) {
		return $(".sungWins").show();
	} else if (gameArray[0][2] === 2 && gameArray[1][2] === 2 && gameArray [2][2] === 2) {
		return $(".sungWins").show();
	} else if (gameArray[0][0] === 2 && gameArray[1][1] === 2 && gameArray [2][2] === 2) {
		return $(".sungWins").show();
	} else if (gameArray[2][0] === 2 && gameArray[1][1] === 2 && gameArray [0][2] === 2) {
		return $(".sungWins").show();
	} else if (i > 8) {
		return $(".tie").show();
	}
};





//the Modal
// console.log("The monster mash - linked")

// var myButton = $('#modal-button');
// var datModal = $('#modal');
// var closeButton = $('#close-modal')

// myButton.on('click', function() {
//   console.log("You clicked me oh lawd");
//   datModal.toggle();
//   console.log(datModal)
// });

// closeButton.on('click', function() {
//   datModal.toggle();
// })