var quizQuestions = [
  [ 'How many states are in the US?', '50'],
  ['What is bigger, a whippet or an IG?', 'whippet'],
  ['Do zebras have stripes', 'yes']
];
var answersCorrect = 0;

function print(message) {
  document.write(message);
}

function runQuiz(questions) {
  for ( var i = 0; i < 3; i += 1 ) {
    var userAnswer = prompt( questions[i][0] );
    if ( userAnswer ===  questions[i][1]) {
      answersCorrect += 1;
    }
  }
  print('You got ' + answersCorrect + ' correct.');
}

runQuiz(quizQuestions);
