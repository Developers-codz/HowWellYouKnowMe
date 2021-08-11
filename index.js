var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

var player = readlineSync.question("Enter your name: ")
console.log("How well you know me , " + player);
console.log("--------------------------");

function play(question , answer){
  // console.log(answer);
  var userAnswer = readlineSync.question(question);
  console.log("You answered " + userAnswer);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
    console.log("Current score: " + chalk.green(score));
  }
  else{
    console.log("Current score: " + chalk.red(score) );
  
  }
  console.log("---------");
}

quesOne = {
  question: "What is my Nickname ? ",
  answer: 'kaju',
};

quesTwo = {
  question: 'Where do I live ? ',
  answer: 'patna',
};

quesThree = {
  question: "Which is my favourite web series? ",
  answer: 'dark',
};

quesFour = {
  question: 'Do I like programming? ',
  answer : 'yes',
}


var quizArray = [quesOne , quesTwo , quesThree , quesFour];
for(var i =0; i<quizArray.length;i++){
  var currentQues = quizArray[i].question;
  var currentAns = quizArray[i].answer;
  play(currentQues , currentAns);
}

highestScore = {
  name : 'Kajal',
  score: 4,
}
secondHighestScore = {
  name: 'komal',
  score: 3,
}


console.log("Yaay! you scored :" + chalk.yellow(score));
console.log(chalk.green("......Highest Scorer........"));
console.log(highestScore.name + "-" + highestScore.score);
console.log(secondHighestScore.name + "-" + secondHighestScore.score);
console.log(chalk.magenta("if you think you beaten the records Send me the screenSort !!!!!"));


