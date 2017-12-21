function check(){

var Question1 = document.quiz.Q1.value;
var Question2 = document.quiz.Q2.value;
var Question3 = document.quiz.Q3.value;
var Question4 = document.quiz.Q4.value;
var correct = 0;

alert("anchors away");

if (Question1 =="StarBurst") {
	correct++;
}

if (Question2 == "true") {
	correct++;
}
if (Question3 == "beam") {
	correct++;
}

if (Question4 == "NR")
	correct++;

	


$("#number_correct").html("You got "+ correct + " correct!");

}
