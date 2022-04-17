// declaration block

const startTime = 80;
let questionNumber = 0;
let answerNumber = 0;
let time = startTime;

const questions = [" If you could only eat one food for the rest of your life, what would it be"];

const answersOne = ["Burger"];

const answersTwo = ["2. rice","2. biscuit","2. nugget","2. fries","2. chicken"];

const answersThree = [". rice","2. biscuit","2. nugget","2. fries"];

const answersFour = [". rice","2. biscuit","2. nugget","2. fries"];

const timerEl = document.getElementById('timer');

const questionEl = document.getElementById('question');

const startButton = document.getElementById('startBtn');

const answerOneButton = document.getElementById('answerOneButton');

const answerTwoButton = document.getElementById('answerTwoButton');

const answerThreeButton = document.getElementById('answerThreeButton');

const answerFourButton = document.getElementById('answerFourButton');

const timer = document.getElementById('timer');

//list elements - not the buttons
const answerOne = document.getElementById('answerOne');

const answerTwo = document.getElementById('answerTwo');

const answerThree = document.getElementById('answerThree');

const answerFour = document.getElementById('answerFour');



startButton.addEventListener('click',()=>{
    quiz();
    timeStart();
});

answerOneButton.addEventListener('click',quiz);
answerTwoButton.addEventListener('click',quiz);
answerThreeButton.addEventListener('click',quiz);
answerFourButton.addEventListener('click',quiz);

//NOT WORKING?

//const incorrectAnswer = document.getElementsByClassName('incorrect');


//incorrectAnswer.addEventListener('click',wrongAnswer);

//function wrongAnswer(){
//    time = time - 10;
//}


function quiz () {
    if (questionNumber < questions.length) {
//hide start button - unhide other buttons
startButton.classList.add('hide');
answerOneButton.classList.remove('hide');
answerTwoButton.classList.remove('hide');
answerThreeButton.classList.remove('hide');
answerFourButton.classList.remove('hide');


// page setup
questionEl.textContent = (questions[questionNumber]);

answerOneButton.textContent = (answersOne[questionNumber]);
answerTwoButton.textContent = (answersTwo[questionNumber]);
answerThreeButton.textContent =(answersThree[questionNumber]);
answerFourButton.textContent = (answersFour[questionNumber]);

questionNumber++;

    }

    else {
        const score = time;
        questionEl.textContent = ("All Done!")
        answerOneButton.classList.add('hide');
        answerTwoButton.classList.add('hide');
        answerThreeButton.classList.add('hide');
        answerFourButton.classList.add('hide');

        timer.classList.add('hide');

        answerOne.textContent = ('Your score is: ' + score);
        
        answerTwo.innerHTML = ("<form id='entryForm'><label for='initials'>Initials</label><br><input type='text' id='initials' name='initials'><input type='submit'></form>")
    } 

    if (answerNumber=2){
        answerThreeButton.classList.add('incorrect');
        answerFourButton.classList.remove('incorrect');
    }
    
    if (answerNumber = 3){
        answerThreeButton.classList.remove('incorrect');
        answerFourButton.classList.add('incorrect');
    }
    
    if (answerNumber = 4){
        answerThreeButton.classList.add('incorrect');
        answerFourButton.classList.remove('incorrect');
    }
    answerNumber++;
}


function timeStart() {

setInterval(countdown, 1000);

function countdown() {
    // start timer/score

    if (time > -1) {
    timerEl.innerHTML = ("Score: " + time);
    time --;
    }
}
}


