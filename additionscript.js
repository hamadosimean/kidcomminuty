function generateProblem() {
  var num1 = Math.floor(Math.random() * 10);
  var num2 = Math.floor(Math.random() * 10);
  var question = num1 + " + " + num2 + " = ?";
  document.getElementById("question").innerHTML = question;
  return num1 + num2;
}

var correctAnswer = generateProblem();

// Check the answer and display the result
function checkAnswer() {
  var userAnswer = document.getElementById("answer").value;
  var result = document.getElementById("result");
  if (userAnswer == correctAnswer) {
    result.innerHTML = "Correct!";
    result.style.color = "green";
  } else {
    result.innerHTML = "Incorrect. Essai encore.";
    result.style.color = "red";
  }
}

function help(){
  
  document.getElementById('help').innerHTML="<strong>Rafraichir la page  à chaque fois pour avoir un nouveau calcul </strong>"
}
