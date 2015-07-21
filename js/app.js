
$(document).ready(function() {

	var score = 0;

	$("#start-button").click(function() {
		$(".instructions").hide();
		$(".questions").show();
		$("#question-one").show();
		$(".progress-bar li:nth-child(1)").toggleClass("active").toggleClass("complete");
		$(".progress-bar li:nth-child(2)").toggleClass("active");
	});

	$("#question-one form").submit(function(e) {
		e.preventDefault();
		if ( $("input[name='userGuess1']:checked").length) {
			var guess = parseInt($("input[name='userGuess1']:checked").val());
			var answer = 4;
			console.log("Your guess is: " + guess);
			if ( guess == answer ) {
				score++;
				console.log("the score is: " + score);
			}
			console.log("this is the bit after the if statement");
			$("#question-one").hide();
			$("#question-two").show();
			$(".progress-bar li:nth-child(2)").toggleClass("active").toggleClass("complete");
			$(".progress-bar li:nth-child(3)").toggleClass("active");
			$("[name=userGuess1]").removeAttr("checked");
		}
	});

	$("#question-two form").submit(function(e) {
		e.preventDefault();
		if ( $("input[name='userGuess2']:checked").length) {
			var guess = parseInt($("input[name='userGuess2']:checked").val());
			var answer = 3;
			console.log("Your guess is: " + guess);
			if ( guess == answer ) {
				score++;
				console.log("the score is: " + score);
			}
			console.log("this is the bit after the if statement");
			$("#question-two").hide();
			$("#question-three").show();
			$(".progress-bar li:nth-child(3)").toggleClass("active").toggleClass("complete");
			$(".progress-bar li:nth-child(4)").toggleClass("active");
			$("[name=userGuess2]").removeAttr("checked");
		}
	});

	$("#question-three form").submit(function(e) {
		e.preventDefault();
		if ( $("input[name='userGuess3']:checked").length) {
			var guess = parseInt($("input[name='userGuess3']:checked").val());
			var answer = 1;
			console.log("Your guess is: " + guess);
			if ( guess == answer ) {
				score++;
				console.log("the score is: " + score);
			}
			console.log("this is the bit after the if statement");
			$("#question-three").hide();
			$("#question-four").show();
			$(".progress-bar li:nth-child(4)").toggleClass("active").toggleClass("complete");
			$(".progress-bar li:nth-child(5)").toggleClass("active");
			$("[name=userGuess3]").removeAttr("checked");
		}
	});

	$("#question-four form").submit(function(e) {
		e.preventDefault();
		if ( $("input[name='userGuess4']:checked").length) {
			var guess = parseInt($("input[name='userGuess4']:checked").val());
			var answer = 1;
			console.log("Your guess is: " + guess);
			if ( guess == answer ) {
				score++;
				console.log("the score is: " + score);
			}
			console.log("this is the bit after the if statement");
			$("#question-four").hide();
			$("#question-five").show();
			$(".progress-bar li:nth-child(5)").toggleClass("active").toggleClass("complete");
			$(".progress-bar li:nth-child(6)").toggleClass("active");
			$("[name=userGuess4]").removeAttr("checked");
		}
	});

	$("#question-five form").submit(function(e) {
		e.preventDefault();
		if ( $("input[name='userGuess5']:checked").length) {
			var guess = parseInt($("input[name='userGuess5']:checked").val());
			var answer = 3;
			console.log("Your guess is: " + guess);
			if ( guess == answer ) {
				score++;
				console.log("the score is: " + score);
			}
			console.log("this is the bit after the if statement");
			$("#question-five").hide();
			$("#question-six").show();
			$(".progress-bar li:nth-child(6)").toggleClass("active").toggleClass("complete");
			$(".progress-bar li:nth-child(7)").toggleClass("active");
			$("[name=userGuess5]").removeAttr("checked");
		}
	});

	$("#question-six form").submit(function(e) {
		e.preventDefault();
		if ( $("input[name='userGuess6']:checked").length) {
			var guess = parseInt($("input[name='userGuess6']:checked").val());
			var answer = 2;
			console.log("Your guess is: " + guess);
			if ( guess == answer ) {
				score++;
				console.log("the score is: " + score);
			}
			console.log("this is the bit after the if statement");
			$("#question-six").hide();
			$("#results").show();
			$(".prompt>h2").text("You've got " + score + " out of 6 questions right!");
			$(".progress-bar li:nth-child(7)").toggleClass("active").toggleClass("complete");
			$(".progress-bar li:nth-child(8)").toggleClass("active");
			$("[name=userGuess6]").removeAttr("checked");
		}
	});

	$("#restart-button").click(function(){
		score = 0
		$("#results").hide();
		$("#question-one").show();
		$(".progress-bar li:nth-child(8)").toggleClass("active");
		$(".progress-bar li:nth-child(7)").toggleClass("complete");
		$(".progress-bar li:nth-child(6)").toggleClass("complete");
		$(".progress-bar li:nth-child(5)").toggleClass("complete");
		$(".progress-bar li:nth-child(4)").toggleClass("complete");
		$(".progress-bar li:nth-child(3)").toggleClass("complete");
		$(".progress-bar li:nth-child(2)").toggleClass("active").toggleClass("complete");
	});
});