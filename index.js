//welcome part
var readlineSync = require("readline-sync");
const chalk = require('chalk');

var userName = readlineSync.question("Hi, What's your name? ");
console.log();
console.log(chalk.green("Welcome " + userName.toUpperCase() + " to DO YOU KNOW Jagadish Patil? "));

console.log();

var userScore = 0;

//play function
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("you are right"));
    userScore++;
  }
  else{
    console.log(chalk.red("you are wrong"));
  }
  console.log(chalk.yellow("Your score is " + userScore + " now"));
}

//array of objects
var questions = [{
  question: "Where do I live? (belgaum/bangalore) ",
  answer: "belgaum"
},{
  question: "What do I like to have? (tea/juice) ",
  answer: "juice"
},{
  question: "Am I older than 25 Age? (yes/no) ",
  answer: "yes"
},{
  question: "When is my birthday? (march/july) ",
  answer: "march"
},{
  question: "What is your favorite color? (red/white) ",
  answer: "white"
}];

//loop
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  console.log("******");
  console.log();
}

console.log("-------------");

var allScores = [{
  name : "jagadish",
  score : 5
},{
  name : "anand",
  score : 4
}];

finalScore();

function finalScore(){
  console.log();
  console.log("##########");
  console.log(chalk.green.bold("Your final score is: " + userScore));
  console.log("##########");
  console.log();

  for(var i=0;i<allScores.length;i++){
    var currentScore = allScores[i];

    if(userScore > currentScore.score){
      console.log("$$*** --  ***$$");
      console.log(chalk.green("Congratulation! " + userName.toUpperCase() + " ==> Your score is one of the highest score"));
      console.log(chalk.green("Send me the screenshot to update your name and score in the Quiz"));
      console.log("$$*** --  ***$$");
      console.log();
    }
  }
  
  for(var i=0;i<allScores.length;i++){
    var currentScore = allScores[i];
    console.log(currentScore.name + " has scored: " + currentScore.score);
  }
}

console.log();
console.log("------END-------");