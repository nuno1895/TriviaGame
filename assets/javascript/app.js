//Global Variables =============================================

var trivaQuestions = [ 
	{
		question: 'Question 1',
		choices: ['answer1' , 'answer2' , 'answer3', 'answer4'],
		rightChoice: 2
	},{
		question: 'Question 2',
		choices: ['answer1' , 'answer2' , 'answer3', 'answer4'],
		rightChoice: 1
	},{
		question: 'Question 3',
		choices: ['answer1' , 'answer2' , 'answer3', 'answer4'],
		rightChoice: 3
	}, {
		question: 'Question 4',
		choices: ['answer1' , 'answer2' , 'answer3', 'answer4'],
		rightChoice: 4
	},{
		question: 'Question 5',
		choices: ['answer1' , 'answer5' , 'answer3', 'answer4'],
		rightChoice: 5
	}, {
		question: 'Question 6',
		choices: ['answer1' , 'answer6' , 'answer3', 'answer4'],
		rightChoice: 2
	}];

	var currentQuestion = 0;

	var questionsRight = 0;

	var startButton =document.getElementById("start");

//Functions============================================

$(document).ready(function() {

	startButton.onclick = function () {	

		playGame = function () {

			//set timer

			

			var timerClock = 30;

			//selects all the questions and choices

			var question = trivaQuestions[currentQuestion].question;

			console.log(question);

			var choices = trivaQuestions[currentQuestion].choices

			console.log(choices);

			var rightChoice = trivaQuestions[currentQuestion].rightChoice;

			console.log(rightChoice);

			//clears the Div to allow for new buttons

			$('#choices').empty();

			//writes in the new question

			$('#question').html('<h2>' + question + '</h2>');

			//creates a for loop to put in all the buttons

			for (var i = 0; i < choices.length; i++) {
				console.log(choices[i]);
				var newButton = $('<button>').text(choices[i]).attr('data-val' , i);
				$('#choices').append(newButton);
				
			};

			//creates actions based on clicks for right answer and bad anser

			$('button').on('click', function() {
				console.log("clicked");
				if($(this).data('val') == rightChoice){
					currentQuestion++;
					questionsRight++;
					console.log('Questions Right: ' + questionsRight);
					clearTimeout(timerId);
					playGame();
				}else if($(this).data('val') != rightChoice) {
					clearTimeout(timerId);
					$('#question').html('LOSER!!!!!!');
					$('#choices').empty();
					setTimeout(reset, 1000);
				};


			});

			//creates and sets timers



			var pageTimer = $('#clock').text(timerClock);
			var timerId = setInterval(countdown, 1000);

				function countdown() {
				  if (timerClock == 0) {
				    clearTimeout(timerId);
				    $('#question').html("Time Ran Out");
				    $('#choices').empty();
				    setTimeout(reset, 3000)
				  } else {
				    pageTimer.text(timerClock + ' seconds remaining');
				    timerClock--;
				  }
				}


		};

		playGame()

		 //function to reload page on loss

		function reset() {
	    location.reload();
		};	
	}; //closes start button function

}); //closes document readey
