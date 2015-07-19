//  var playerOne = function playerOne(Name){
//  	$("playerOneButton").click(function(event){
//  		$("<h1>").text("") = $("#playerOneInput").val()})
// }
var i = 0

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

	var counter= function counter(){
		if (i%2 === 0) {
		i= i+1;
		console.log("X");
		return "url('http://i.imgur.com/n7U1bEYb.jpg')";
		} else {
			i= i+1;
			console.log("Y");
			return "url('http://i.imgur.com/e9Hb6DSb.jpg')";
		}
	}
	//How to change a back ground image
$("#0").click(function(){
	console.log("hey man");
	$('#0').css('background-image', counter());
	$('#0').css("background-size" , "cover");
})
$("#1").click(function(){
	console.log("something came in the mail today");
	$('#1').css('background-image', counter());
	$('#1').css('background-size' , 'cover');
})
$("#2").click(function(){
	console.log("oh word?");
	$('#2').css('background-image', counter());
	$('#2').css('background-size' , 'cover');
})
$("#3").click(function(){
	console.log("what came in the mail?");
	$('#3').css('background-image', counter());
	$('#3').css('background-size' , 'cover');
})
$("#4").click(function(){
	console.log("......");
	$('#4').css('background-image', counter());
	$('#4').css('background-size' , 'cover');
})
$("#5").click(function(){
	console.log("..........");
	$('#5').css('background-image', counter());
	$('#5').css('background-size' , 'cover');
})
$("#6").click(function(){
	console.log("............");
	$('#6').css('background-image', counter());
	$('#6').css('background-size' , 'cover');
})
$("#7").click(function(){
	console.log("deezzz nuts");
	$('#7').css('background-image', counter());
	$('#7').css('background-size' , 'cover');
})
$("#8").click(function(){
	console.log("HA gottem");
	$('#8').css('background-image', counter());
	$('#8').css('background-size' , 'cover');
})





//the Modal
console.log("The monster mash - linked")

var myButton = $('#modal-button');
var datModal = $('#modal');
var closeButton = $('#close-modal')

myButton.on('click', function() {
  console.log("You clicked me oh lawd");
  datModal.toggle();
  console.log(datModal)
});

closeButton.on('click', function() {
  datModal.toggle();
})