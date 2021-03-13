
var time = document.getElementById("displayTime");
var gameStart = document.getElementById("startTime");
var buttonSubmit = document.getElementById("submitAnswer");
var finishdTime = document.getElementById("stopTime");
var reloadGame = document.getElementById("tryAgain");
var dispalyMath = document.getElementById("someMath");
var formMath = document.getElementById("formMath");
var fieldMath = document.getElementById("someAnswer");
var innerBox = document.getElementById("innerImage");
var pointsNeeded = document.getElementById("minPoints");



var interval = undefined;
// chenge this 
var state = {
    score:0
}


var stateTime = {
    miliseconds: 0,
    seconds: 0,
    minutes: 0
}

    mili = stateTime.miliseconds = 0;
    secon = stateTime.seconds = 0;
    minu = stateTime.minutes = 0;

function stopWatch(){
    mili++;
    if(mili >= 60) {
        mili = 0;
        secon++;

    if(secon >= 60) {
        secon = 0;
        minu++;
    }
    }
    // om miliseonds siffra är en siffra alltså mindre än 10 
    counterGame =  (minu ? (minu > 9 ? minu : "0" + minu) : "00") + ":" + (secon ? (secon > 9 ? secon : "0" + secon) : "00") + ":" + (mili > 9 ? mili : "0" + mili);
    time.textContent = counterGame;

}


function gameOn(){


interval = setInterval(stopWatch, 15);
   if(gameStart.style.display === "block"){
    gameStart.style.display = "none";
   }else{
    gameStart.style.display ="block";
   }
    // startTime.innerHTML 
    // console.log(interval);

    // var some = clearInterval(interval);
    // console.log(some);
    // time.style.color = "blue";

}


// math calculation
function displayProblem() {
    state.currentProblem = setMathProblem()
    dispalyMath.innerHTML = `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`
    fieldMath.value =""
    fieldMath.focus()
}

function setNumber(max){
    return Math.floor(Math.random() * (max + 1))
}

function setMathProblem() {
    return {
        numberOne: setNumber(10),
        numberTwo: setNumber(10),
        operator: ['+', '-', 'x'][setNumber(2)]
    }
}
function newGame(){
    location.reload();
    }


// when submitted 
formMath.addEventListener("submit", handleSubmit);
function handleSubmit(e){
    e.preventDefault()
    let correctAnswer 
    const p = state.currentProblem;
    if(p.operator == "+") correctAnswer = p.numberOne + p.numberTwo
    if(p.operator == "-") correctAnswer = p.numberOne - p.numberTwo
    if(p.operator == "x") correctAnswer = p.numberOne * p.numberTwo

    if (parseInt(fieldMath.value, 10) === correctAnswer) {
        state.score++
        pointsNeeded.textContent = 9 - state.score;
        innerBox.style.transform = `scaleX(${state.score / 9})`;
        displayProblem();
    }else{
        alert ("försök igjen...");
        location.reload();
    }
    checkLogic()
}



function checkLogic(){
    if(state.score === 9){
        clearInterval(interval);
        finishdTime.innerHTML= counterGame;
        alert (counterGame);
        resestGame();
        reloadGame.style.display = "block";
    }  
}

function resestGame(){
    displayProblem()
    state.score = 0
    pointsNeeded.textContent = 9

}

displayProblem()










