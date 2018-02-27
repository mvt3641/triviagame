

function Start() {
	$('#startbtn').hide();
  var seconds_left = 20;
  var interval = setInterval(function() {
    $('#startdiv').html(--seconds_left);
		if(seconds_left < 10){
			$('#startdiv').removeClass('strdiv');
			$('#startdiv').addClass('tensec_left');
		};
   if (seconds_left <= 0) {
      $('#startdiv').html("Times up!");
      clearInterval(interval);
			check();
    }else if($('#submit-btn').on('click',function(){
			clearInterval(interval);
		}));
  }, 1000);
};



$("#startbtn").on('click',function(){
	Start();
});


function check() {

  var Question1 = ($("input[name='Q1']:checked").val());
  var Question2 = ($("input[name='Q2']:checked").val());
  var Question3 = ($("input[name='Q3']:checked").val());
  var Question4 = ($("input[name='Q4']:checked").val());
  var correct = 0;

  console.log(Question1);
  console.log(Question2);
  console.log(Question3);
  console.log(Question4);
  if (Question1 == "Starburst") {
    correct++;

  }

  if (Question2 == "true") {
    correct++;
  }
  if (Question3 == "beam") {
    correct++;
  }

  if (Question4 == "NR") {
    correct++;

    console.log(correct);
  }
  $("#number_correct").html("You got " + correct + " correct!");

  if (correct < 3) {
    $('#number_correct').addClass('failed');
    // $()('Go home and study');

  }
};

$('#submit-btn').on('click', function() {
	// clearInterval(interval);
  check();
});
