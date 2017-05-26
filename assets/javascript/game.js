$(document).ready(function() {


	var randomNum;
	var randomCrystal1;
	var randomCrystal2;
	var randomCrystal3;
	var randomCrystal4;
	var wins = 0;
	var losses = 0;
	var result;



	// create function to randomize values
	function initValues(){
		randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		result = 0;
		randomCrystal1 = Math.floor(Math.random() * (12)) + 1;
		randomCrystal2 = Math.floor(Math.random() * (12)) + 1;
		randomCrystal3 = Math.floor(Math.random() * (12)) + 1;
		randomCrystal4 = Math.floor(Math.random() * (12)) + 1;
		
		$("#crystal1").val(randomCrystal1);
		$("#crystal2").val(randomCrystal2);
		$("#crystal3").val(randomCrystal3);
		$("#crystal4").val(randomCrystal4);
		
		$("#guessNum").text(randomNum);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#totalScore").text(result);
		
	}

	initValues();

	$(".crystalImg").on("click",function(){

		result = (+this.value) + (+result);
		$("#totalScore").val(result); 
		$("#totalScore").text(result);

		
		if (randomNum == totalScore.value){
			$("#winText").text("You won!!");
			wins++;
			initValues();
		}

		else if (totalScore.value > randomNum){
			$("#winText").text("You lost!!");
			losses++;
			initValues();
		}

	});

});