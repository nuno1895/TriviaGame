//Global Variables =============================================

var trivaQuestions = [ 
	{
		question: "On Sons of Anarchy, who was Tara's Killer?",
		choices: ['Juice' , 'Gemma' , 'Wendy', 'Opie'],
		img: "assets/images/sons.jpg",
		rightChoice: 1
	},{
		question: "On the Walking Dead, what is Rick's surname?",
		choices: ['Groves' , 'Grimes' , 'Gilles', 'Grimshaw'],
		img: "assets/images/walking-dead.jpeg",
		rightChoice: 1
	},{
		question: "On Game of Thrones, Which are the house Lannister's words?",
		choices: ['Ours is the fury' , 'Family, Duty, Honour' , 'Lannisters always pay their debt', 'Hear me roar'],
		img: "assets/images/games.jpg",
		rightChoice: 2
	}, {
		question: "On The Flash, who is Barry Allen?",
		choices: ['The Flash' , 'Firestorm' , 'Spratan', 'Vibe'],
		img: "assets/images/the-flash.jpg",
		rightChoice: 0
	},{
		question: "On Breaking Bad, who is Heisenberg?",
		choices: ['Jesse Pinkman' , 'Gus Fring' , 'Saul Goodman', 'Walter White'],
		img: "assets/images/BreakingBad.png",
		rightChoice: 3
	},{
		question: "On Marvel's Daredevil, who is Daredevil's Love interest?",
		choices: ['Karen Page' , 'Claire Temple' , 'Elecktra', 'Vanessa Marianna'],
		img: "assets/images/daredevil.jpg",
		rightChoice: 2
	},{
		question: "On Mr. Robot, who plays Mr. Robot?",
		choices: ['Christian Slater' , 'Ben Rappaport' , 'Rami Malek', 'Elliot Villar'],
		img: "assets/images/mrrobot.jpg",
		rightChoice: 0
	},{
		question: "On Super Natural, What is the last name of Dean and Sam?",
		choices: ['Smith' , 'Johnson' , 'Winchester', 'Otendin'],
		img: "assets/images/supernatural.png",
		rightChoice: 2
	},{
		question: "On Vikings, What is the name Ragnar Lothbrook's first son?",
		choices: ['Bjorn' , 'Rollo' , 'Athelstan', 'Floki'],
		img: "assets/images/Vikings.jpg",
		rightChoice: 0
	}, {
		question: "On Teen Wolf, who bit Scott and turned him to a Werewolf?",
		choices: ['Derek' , 'Stiles' , 'Lyidia', 'Peter'],
		img: "assets/images/teen.png",
		rightChoice: 3
		}, {
		question: '',
		choices: [''],
		img: '',
		rightChoice: ''
	}];

	var currentQuestion = 0;

	var questionsRight = 0;

	var questionWrong = 0;

	var questionNotAnswered = 0;

	var timerClock;

	var startButton =document.getElementById("start");

//Functions============================================

$(document).ready(function() {

	startButton.onclick = function () {	

		playGame = function () {

			$('#button').hide();

			//set timer

			timerClock = 15;

			//selects all the questions and choices

			var question = trivaQuestions[currentQuestion].question;

			console.log(question);

			var choices = trivaQuestions[currentQuestion].choices

			console.log(choices);

			var rightChoice = trivaQuestions[currentQuestion].rightChoice;

			console.log(rightChoice);

			var tvShowImages = trivaQuestions[currentQuestion].img;


			//clears the Div to allow for new buttons

			$('#choices').empty();

			//writes in the new question

			$('#question').html('<h2>' + question + '</h2>');

			//creates a for loop to put in all the buttons

			for (var i = 0; i < choices.length; i++) {
				console.log(choices[i]);
				var newButton = $('<button>').text(choices[i]).attr('data-val' , i);
				$('#choices').append(newButton);
				var img = $('<img>').attr('class', 'showImages').attr('src', tvShowImages).attr('height', '250px').attr('width', '500px')
					$('#images').html(img);
				
			};

			//creates actions based on clicks for right answer and bad anser

			$('button').on('click', function() {
				console.log("clicked");
				if($(this).data('val') == rightChoice){
					currentQuestion++;
					questionsRight++;
					clearTimeout(timerId);
					playGame();
				}else if($(this).data('val') != rightChoice) {
					$('#choices').empty();
					currentQuestion++;
					questionWrong++;
					clearTimeout(timerId);
					playGame();
				};


			});

			//creates and sets timers



			var pageTimer = $('#clock').text(timerClock);
			var timerId = setInterval(countdown, 1000);

				function countdown() {
				  if (timerClock == 0) {
				    currentQuestion++;
					questionNotAnswered++;					
					clearTimeout(timerId);
					playGame();				    
				  } else {
				    pageTimer.text(timerClock);
				    timerClock--;
				  };
				};

			console.log('Questions Right: ' + questionsRight);
			console.log('Questions Wrong: ' + questionWrong)
			console.log('Questions Not Answered: ' + questionNotAnswered);
			console.log("current question : " , currentQuestion);


			if (currentQuestion == 10) {
			clearTimeout(timerId);	
			$('#question').empty();
			$('#choices').empty();
			$('#images').empty();
			$('#timer').hide();
			
			$('body').css('background','url(../images/b2.jpeg)');
			$('#question').html('<h2>You got ' + questionsRight + ' right!!!! </h2>');
			$('#choices').html('<h2>You got ' + questionWrong + ' wrong!!!! </h2>');
			$('#images').html('<h2>You missed ' + questionNotAnswered + ' questions!!!! </h2>');
			var img2 = $('<img>').attr('src', "assets/images/gameOver.gif").attr('height', '250px').attr('width', '500px')
					$('#images').append(img2);
		

			setTimeout(reset, 5000);
		};	

		};
		

		playGame();


		 //function to reload page on loss

		function reset() {
	    location.reload();
		};	
	}; //closes start button function

}); //closes document readey
