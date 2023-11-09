let promt;
let randomNumber = Math.floor(Math.random() * 100);
let score = 100;
alert('Welcome to "Guess the Number Game"');
alert('To start the Game press OK')


while (randomNumber !== promt) {

  promt = prompt('Guess the number between 0 to 100 ');
  promt = Number.parseInt(promt);
  score -= 1;

  if (promt === randomNumber) {
    alert(`Your Guess ${promt} is Correct Number is ` + randomNumber);
    alert('WINNER WINNER CHICKEN DINNER 🍽️ ' + 'your Score is ' + score + ' according to your IQ...');
  }
  else if (score === 0) {
    alert(`Game Over , Your Score is ${score}`);
    alert('Correct Number was ' + randomNumber);
    break;
  } else if (promt > randomNumber) {
    alert(`Your Guess ${promt} is wrong ` + '/ You have more ' + score + ' Live' + '   Hint : Go Less');
  } else if (promt < randomNumber) {
    alert(`Your Guess ${promt} is wrong ` + '/ You have more ' + score + ' Live' + '   Hint : Go Higher');
  }
  else {
    alert(`Your Guess ${promt} is wrong ` + '/ You have more ' + score + ' Live');
  }

}