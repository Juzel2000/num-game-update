
let hint=document.querySelector('.message')
let btn = document.querySelector('.check')
var count =0;

btn.onclick = function () {

    function showhint(start,end){
        hint.textContent=`between ${start} and ${end}`
    }

    count++;
    document.querySelector('.clicks').textContent=`${count} click`

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
            start = Math.trunc(Math.random()*secretnumber)+1;
            end = start+9;
            showhint(start,end)

        }
        else if(secretnumber<=15 && secretnumber>=11){
            diff = (secretnumber-10)+1
            start = Math.trunc(Math.random()*diff)+1;
            end= start+9
            showhint(start,end)

        }
        else{
            diff = (secretnumber-10)+1
            // max =15 min=diff
            start= Math.floor(Math.random() * (15 - diff + 1)) + diff;
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









