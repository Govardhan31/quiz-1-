const chalk = require('chalk');
var readlineSync = require('readline-sync');
 console.log("Welcome to the Quiz");
 var username = readlineSync.question('Enter your Name: ');
console.log(chalk.red('Welcome,' , username, 'Let\'s Start the  Quiz!! '));

var highScores = [
  {
    name: "Gudiya",
    score: 5,
  },

  {
    name: "Govardhan",
    score: 4,
  },
]

var score = 0;
 function quiz(question,answer){
 var userAnswer = readlineSync.question(chalk.green(question));

   if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.yellow('You are Right!!'));
    score = score + 1;
  }else{
console.log('You are Wrong!!');
 score = score - 1;
  }

 if(score < 0){
score = 0;
   }
      console.log('Your Score is: ', score);
  console.log('----------------------------');
 }

 var questions = [
   {question: 'Where do Govardhan live? ',answer: 'Eluru'},
   {question: "My favorite superhero would be?? ",answer: 'pawan kalyan'},
  {question: "What's  Govardhan's Favourite Color? ",answer: 'Black'},
  {question: "What's Govardhan's Favourite place? ",answer: 'Agra'},
  {question:" Where do I work? " ,answer: 'home'},
  {question: "Which type of shopping does Govardhan's like ",answer: 'Traditional'}
  
 ];

 for(var i = 0;i<questions.length;i++){
   quiz(questions[i].question,questions[i].answer);
 }

 console.log('Your Final Score is: ', score);

 function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


showScores();
