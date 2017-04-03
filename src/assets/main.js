let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    //add functionality to guess function here

if (attempt == "" && answer ==""){
    setHiddenFields();
  }

  if (!validateInput(input.value)){
    return false;
    attempt +=1;
  }
}

//implement new functions here
function setHiddenFields(){

  if (answer == ""){
  answer = Math.floor(((Math.random())*10000)).toString();

while(answer.length < 4){
answer = "0" + answer;
}
}

if (attempt == ""){
  attempt = 0;
}


}

function setMessage(text){
  message.innerHTML = text;
}

function validateInput(input){
  if (input.length == 4)
  return true;
  else setMessage("Guesses must be exactly 4 characters long.")
  return false;
}

function getResults(input){
  let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
 for(i = 0; i < input.length; i++)
 {
     if(input.charAt(i) == answer.charAt(i))
     {
         html += '<span class="glyphicon glyphicon-ok"></span>';
         correct++;
     } else if (answer.indexOf(input.charAt(i)) > -1) {
         html += '<span class="glyphicon glyphicon-transfer"></span>';
     } else {
         html += '<span class="glyphicon glyphicon-remove"></span>';
     }
 }
 html += '</div></div>';

 results.innerHTML += html;

 if(correct == input.length) {
        message.innerHTML = 'You Win! :)';
        code.className += " success";
        code.innerHTML = answer;
        guessingDiv.style = "display:none";
        replayDiv.style = "display:block";
    } else if(attempt >= 10) {
        message.innerHTML = 'You Lose! :(';
        code.className += " failure";
        code.innerHTML = answer;
        guessingDiv.style = "display:none";
        replayDiv.style = "display:block";
    } else {
        message.innerHTML = 'Incorrect, try again.';
    }
}
