let question = document.getElementById('question');
let help = document.getElementById('help');
let ani = document.getElementById('ani');
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let total = document.getElementById('total');
let streak = document.getElementById('streak');
let correct = document.getElementById('correct');
let incorrect = document.getElementById('incorrect');
let chosenAnswer = document.getElementById('chosenAnswer');
let correctIncorrect = document.getElementById('correctIncorrect');
let rawChoices = [];
let fixedChoices = [];
let questionChoices = [];
let currentQuestion = 0;
let currentQuestionNumber = 0;
let currentQuestionDeckNumber;
let currentStreak = 0;
let currentCorrect = 0;
let currentIncorrect = 0;
let correctAnswer;
let answered = [];
let answeredChoices = [];
let temp;
function loadChoices(){

    if(!window.localStorage.choices||window.localStorage.choices=='null'){
        question.innerHTML = "I'm drawing a blank...";
    }else{
    rawChoices = localStorage.getItem("choices");
    
    for(let i = 0; i < rawChoices.length; i++)
    {
        if(rawChoices[i] == ',')
        {
            if(rawChoices[i-2] == ',' && rawChoices[i-2] != 'null')
            {
                fixedChoices.push(rawChoices[i-1]);
            }
            else{
                temp = rawChoices[i-2] + rawChoices[i-1];
                fixedChoices.push(temp);
            }
        }
    }
    if(rawChoices[1] == ',')
    {
    fixedChoices[0] = rawChoices[0];
    }
    else
    {
        temp = rawChoices[0] + rawChoices[1];
    fixedChoices[0] = temp;
    }
    question.innerHTML = "Loading";
    help.innerHTML = "Please hold";
    for(let i = 0; i < fixedChoices.length;i++){
        for(let j = 0; j <deck.length;j++){
            if(deck[j].Chapter==fixedChoices[i]){
                questionChoices.push(deck[j].UUID);
            }
        }
    }
    help.innerHTML = "";
    ani.style.opacity = 100;
    currentQuestion=questionChoices[0];
    updateData();
    }
}
function naviagate(direction){
    if(direction=="back"){
        if(currentQuestionNumber==0){
            return;
        }else{
            currentQuestionNumber = currentQuestionNumber-1;
            currentQuestion = questionChoices[currentQuestionNumber];
            chosenAnswer.innerHTML = "";
            correctIncorrect.innerHTML = "";
        }
    }else if(direction=="forward"){
        if(currentQuestionNumber==questionChoices.length-1){
            return;
        }else{
            currentQuestionNumber = currentQuestionNumber+1;
            currentQuestion = questionChoices[currentQuestionNumber];
            chosenAnswer.innerHTML = "";
            correctIncorrect.innerHTML = "";
        }
    }
    updateData();
}
function updateData(){
    for(let i = 0; i <deck.length;i++){
        if(currentQuestion==deck[i].UUID){
            currentQuestionDeckNumber = i;
        }
    }
    correctAnswer = deck[currentQuestionDeckNumber].Correct;
    for(let i = 0; i < answered.length; i++){
        if(currentQuestion==answered[i]){
            if(answeredChoices[i]!='null'){
            chosenAnswer.innerHTML = "You answered this question with : "+answeredChoices[i];
        }
    if(answeredChoices[i]==correctAnswer){
        correctIncorrect.innerHTML = "Correct!";
    }else{
        currentStreak = 0;
        let temp;
        if(correctAnswer=="A"){
            temp = deck[currentQuestionNumber].A;
        }else if(correctAnswer=="B"){
            temp = deck[currentQuestionNumber].B;
        }else if(correctAnswer=="C"){
            temp = deck[currentQuestionNumber].C;
        }else if(correctAnswer=="D"){
            temp = deck[currentQuestionNumber].D;
        }
        if(answeredChoices[i]!='null'){
        correctIncorrect.innerHTML = "Incorrect Answer <br> The correct answer is: <br>"+correctAnswer+" : "+temp;
        }else{
            correctIncorrect.innerHTML = "The correct answer is: <br>"+correctAnswer+" : "+temp;
        }
    }
        }
    }

    question.innerHTML = deck[currentQuestionDeckNumber].Question;
    a.innerHTML = "A. "+deck[currentQuestionDeckNumber].A;
    b.innerHTML = "B. "+deck[currentQuestionDeckNumber].B;
    c.innerHTML = "C. "+deck[currentQuestionDeckNumber].C;
    d.innerHTML = "D. "+deck[currentQuestionDeckNumber].D;
    total.innerHTML = "(Question "+(currentQuestionNumber+1)+" of "+questionChoices.length+" total questions)";
    streak.innerHTML = "Your current streak is : "+currentStreak;
    correct.innerHTML = "Total Correct : "+currentCorrect;
    incorrect.innerHTML = "Total Incorrect : "+currentIncorrect;
}
function submitAnswer(choice){
    for(let i = 0; i < answered.length; i++){
        if(currentQuestion==answered[i]){
            return;
        }
    }
    correctAnswer = deck[currentQuestionDeckNumber].Correct;
    if(choice==correctAnswer){
        currentCorrect = currentCorrect+1;
        currentStreak = currentStreak+1;
    }else{
        currentIncorrect = currentIncorrect+1;
    }
    answered.push(currentQuestion);
    answeredChoices.push(choice);
    updateData();
}
function shuffle(){
    for(let i = questionChoices.length-1; i>0;i--){
        let j = Math.floor(Math.random()*(i+1));
        let temp = questionChoices[i];
        questionChoices[i] = questionChoices[j];
        questionChoices[j] = temp;
    }
    currentQuestion = questionChoices[0];
    currentStreak = 0;
    currentCorrect = 0;
    currentIncorrect = 0;
    currentQuestionNumber = 0;
    answered = [];
    answeredChoices = [];
    chosenAnswer.innerHTML = "";
    correctIncorrect.innerHTML = "";
    updateData();
}
document.addEventListener("keypress", function(event) {
	if(event.key=='A'){
        for(let i = 0; i < answered.length; i++){
            if(currentQuestion==answered[i]){
                answered.splice(i,1);
                answeredChoices.splice(i,1);
                correctIncorrect.innerHTML = "";
                return;
            }
        }
        answered.push(currentQuestion);
        answeredChoices.push('null');
        updateData();
    }
});