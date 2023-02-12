'use strict';
let score = 25;
var secretnumber = Math.trunc(Math.random() * 25) + 1;
let highscore = 0;
document.querySelector('.number').textContent = secretnumber;    

let hint=document.querySelector('.message')
let btn = document.querySelector('.check')
var count =1;


document.querySelector('.again').addEventListener('click', function () {
  secretnumber = Math.trunc(Math.random() * 25) + 1;
  document.querySelector('.number').textContent = secretnumber;
  document.querySelector('.guess').value='';

  score = 25;
  document.querySelector('.score').textContent = score;
  document.querySelector('main').style.backgroundColor='black';
  document.querySelector('.message').textContent = 'start Gussing';

  //edit changed as comment
  // document.querySelector('.number').textContent = '?';             3333





});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //edited changed as cmnt
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
    //hint item
    



    if(score>0){
      // document.querySelector('.message').textContent =
      // guess > secretnumber? 'too high': 'too low';

      btn.onclick = function () {

        function showhint(start,end){
            hint.textContent=`between ${start} and ${end}`
        }
    
        count++;
        
    
        if(count==2){
    
            if(secretnumber<=10){
                let start = Math.trunc(Math.random()*secretnumber)+1;
                let end = start+14;
                showhint(start,end)
            }
            else if(secretnumber<=15 && secretnumber>10){
                // let diff = (secretnumber+15)-25;
                // let s = secretnumber-diff;
                let start =  Math.trunc(Math.random()*10)+1;
                let end= start+14;
                showhint(start,end)
            }
            else{
                // let diff = (secretnumber+15)-25
                // let s = secretnumber-diff
                let diff2= (secretnumber-15)+1
                const start = Math.floor(Math.random() * (11 - diff2+1 )) + diff2;
                let end= start+14; 
                showhint(start,end)
            }
            
        }
        else if(count==3){
            if(secretnumber<=10){
                let start = Math.trunc(Math.random()*secretnumber)+1;
                end = start+9;
                showhint(start,end)
    
            }
            else if(secretnumber<=15 && secretnumber>=11){
                let diff = (secretnumber-10)+1
                let start = Math.trunc(Math.random()*diff)+1;
                end= start+9
                showhint(start,end)
    
            }
            else{
                let diff = (secretnumber-10)+1
                // max =15 min=diff
                let start= Math.floor(Math.random() * (15 - diff + 1)) + diff;
                end=start+9
                showhint(start,end)
    
    
    
            }
        }
        else if(count==4){
            if(secretnumber<=5 && secretnumber>=1){
                start= start = Math.trunc(Math.random()*secretnumber)+1;
                end=start+4
                showhint(start,end)
            }
            else if(secretnumber<=10 && secretnumber>=6){
                diff = (secretnumber-5)+1;
                start= Math.floor(Math.random() * (secretnumber - diff + 1)) + diff;
                end=start+4;
                showhint(start,end)
    
            }
            else if(secretnumber<=15 && secretnumber>=11){
                diff = (secretnumber-5)+1;
                start= Math.floor(Math.random() * (secretnumber - diff + 1)) + diff;
                end=start+4;
                showhint(start,end)
    
            }
            else if(secretnumber<=20 && secretnumber>=16){
                diff = (secretnumber-5)+1;
                start= Math.floor(Math.random() * (secretnumber - diff + 1)) + diff;
                end=start+4;
                showhint(start,end)
    
            }
            else{
                diff = (secretnumber-5)+1;
                start= Math.floor(Math.random() * (21 - diff + 1)) + diff;  
                end=start+4;
                showhint(start,end)
            }
        }
    
    
    }


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

let m=document.querySelector('.check')
console.log(m);

var timesClicked = 0;

// $("#menu_button").click(function() {
//     timesClicked++;

//     if (timesClicked>1) {
//         //run second function
//     } else {
//         //run first function
//     }
// })
