// var digitalTimer = document.getElementsByTagName("h1")[0];
var timerButton = document.getElementById("timerStart");
var startOverButton = document.getElementById("startOver")
var stopButton = document.getElementById("stop")
var dispalyMath = document.getElementById('someMath');
var formMath = document.getElementById("formMath");
var fieldMath = document.getElementById("someAnswer");
var innerBox = document.getElementById("innerImage");
var pointsNeeded = document.getElementById("pointsNeeded");
console.log(pointsNeeded);


var state = {
    score:0,
    wrongAnswers:0,
    seconds:0,
    minutes:0,
    hours:0
}
 

// var seconds = 0, minutes = 0, hours = 0, t;

// function add() {
//     seconds++;
//     if (seconds >= 60) {
//         seconds = 0;
//         minutes++;
//         if (minutes >= 60) {
//             minutes = 0;
//             hours++;
//         }
//     }
    
// digitalTimer.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

//     timer();
// }
// function timer() {
//     t = setTimeout(add, 1000);
// }

// timerButton.onclick = timer;

// this should happen when finshed game
// stopButton.onclick = function() {
//     clearTimeout(t);
// }

// startOverButton.onclick = function() {
//     digitalTimer.textContent = "00:00:00";
//     seconds = 0; minutes = 0; hours = 0;
// }



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

formMath.addEventListener("submit", handleSubmit);
function handleSubmit(e){
    e.preventDefault()
    let correctAnswer 
    const p = state.currentProblem;
    if(p.operator == "+") correctAnswer = p.numberOne + p.numberTwo
    if(p.operator == "-") correctAnswer = p.numberOne - p.numberTwo
    if(p.operator == "x") correctAnswer = p.numberOne * p.numberTwo

    console.log(correctAnswer);
    
    if (parseInt(fieldMath.value, 10) === correctAnswer) {
        state.score++
        pointsNeeded.textContent = 9 - state.score
        innerBox.style.transform = `scaleX(${state.score / 9})`
        displayProblem()
     
        // timerButton.onclick = timer;
        
    }else{
        alert ("försök igjen..");
        // style displayproblem red when wrong 
    }

    checkLogic()
}

function checkLogic(){
    if(state.score === 9){
        alert ("display time!!");
        resestGame()
        // your time 
    }
}

function resestGame(){
    displayProblem()
    state.score = 0
    pointsNeeded.textContent = 9
   
}

displayProblem()




