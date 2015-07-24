$(document).ready(function() {

	var score = 0;
	var question_index = 0;
	var question = null;

	function playQuiz() {
		if ( $("input[name='userGuess']:checked").length) {
			var guess = parseInt($("input[name='userGuess']:checked").val());
			var answer = question.answer;
			console.log("Your guess is: " + guess);
			console.log("The answer is: " + answer);
			if ( guess == answer ) {
				score++;
				console.log("the score is: " + score);
			}
			$("[name=userGuess]").removeAttr("checked");
			question_index++;
			showQuiz();
		}
	}

	function showQuiz() {
		if ( question_index<questions.length ) {
			question = questions[question_index];
			$(".question-header h2").text(question.name);
			$("#question p").text(question.question);
			$("#answer1").text(question.choices[0]);
			$("#answer2").text(question.choices[1]);
			$("#answer3").text(question.choices[2]);
			$("#answer4").text(question.choices[3]);
			$(".progress-bar li:nth-child("+parseInt(question_index+1)+")").toggleClass("active").toggleClass("complete");
			$(".progress-bar li:nth-child("+parseInt(question_index+2)+")").toggleClass("active");
		}
		else {
			$(".questions").hide();
			$("#results").show();
			$(".progress-bar li:nth-child(7)").toggleClass("active").toggleClass("complete");
			$(".progress-bar li:nth-child(8)").toggleClass("active").toggleClass("complete");
			$(".prompt>h2").text("You've got " + score + " out of 6 questions right!");
		}
	}

	$("#start-button").click(function() {
		$(".instructions").hide();
		$(".questions").show();
		showQuiz();
	});

	$("#question form").submit(function(e) {
		e.preventDefault();
		playQuiz();
		$("#submit-button").unbind();
	});

	$("#restart-button").click(function() {
		score = 0;
		question_index = 0;
		question = null;
		$("#results").hide();
		$(".questions").show();
		$(".progress-bar li").each(function() {
			$(this).toggleClass("complete");
		});
		$(".progress-bar li:nth-child(1)").toggleClass("active");
		$(".progress-bar li:nth-child(8)").toggleClass("active");
		showQuiz();
	});

});

