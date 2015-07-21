
$(document).ready(function() {

	var score = 0;


	$("#start-button").click(function() {
		$(".instructions").hide();
		$(".questions").show();
		$("#question-one").show();
		$(".progress-bar li:nth-child(1)").toggleClass("active").toggleClass("complete");
		$(".progress-bar li:nth-child(2)").toggleClass("active");
		// startQuiz();
	});

	// function startQuiz() {
	// 	$(".instructions").hide();
	// }

	$("#question-one form").submit(function() {
		if ()
		$("")
	});
});