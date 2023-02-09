'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='🎉Correct number'
let score = 20;
var secretnumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;



document.querySelector('.again').addEventListener('click', function () {
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretnumber;
  document.querySelector('.guess').value='';

  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('main').style.backgroundColor='black';
  document.querySelector('.message').textContent = 'start Gussing';
  document.querySelector('.number').textContent = '?';





});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } 

  else if (guess === secretnumber) {
    document.querySelector('.message').textContent = '🎉Correct number';
    document.querySelector('main').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='20rem';
    document.querySelector('.number').textContent = secretnumber;
    if (highscore<score){
      highscore = score;
      document.querySelector('.highscore').textContent=highscore;
    }
  } 
  else if (guess !== secretnumber) {
    score--;
    if(score>0){
      document.querySelector('.message').textContent =
      guess > secretnumber? 'too high': 'too low';
      document.querySelector('.score').textContent = score;

    }
    else{
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = '0';
      document.querySelector('main').style.backgroundColor='red';

      
    }

  }
  
  // else if (guess > secretnumber) {
  //   score--;
  //   if(score>0){
  //     document.querySelector('.message').textContent = 'too high';
  //     document.querySelector('.score').textContent = score;

  //   }
  //   else{
  //     document.querySelector('.message').textContent = 'You lost';
  //     document.querySelector('.score').textContent = '0';
      
  //   }
    
    
  // } else if (guess < secretnumber) {
    
  //   score--;
  //   if(score>0){
  //     document.querySelector('.message').textContent = 'too low';
  //     document.querySelector('.score').textContent = score;
  //   }
  //   else{
  //     document.querySelector('.message').textContent = 'You lost';
  //     document.querySelector('.score').textContent = '0';
  //     document.querySelector('main').style.backgroundColor='red';
      
  //   }
    
  // }
  
});
