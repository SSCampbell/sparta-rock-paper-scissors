var playerScore = 0;
var comScore = 0;
var comChoice = ["ROCK","PAPER","SCISSORS"];
alert("<Welcome To The Rock Paper Scissors Game>");

while (playerScore !== 3 || computerScore !== 3)
{
choice = prompt("What would you like pick: (1)-Rock (2)-Paper (3)-Scissors")

switch (choice)
{
  case 1:
  pChoice = "ROCK";
    break;

  case 2:
  pChoice = "PAPER"
    break;

  case 3:
  pChoice = "SCISSORS"
    break;

  default:

alert("<ERROR> Please Enter Correct Value");
}

var rand = comChoice[Math.floor(Math.random() * comChoice.length)];
cChoice = rand;

gamePlay(pChoice, cChoice);

function gamePlay(pChoice, cChoice)
{

if (pChoice == "ROCK" && cChoice == "SCISSORS")
{
  playerScore++;
  alert("<RockPaperScissors> Player Beats Computer");
  alert("<RockPaperScissors> Player has Selected " + pChoice + " | Computer has Selected " + cChoice + " - Player Score: " + playerScore + " | Computer Score " + comScore)

}

else if (pChoice == "ROCK" && cChoice == "PAPER")
{
  comScore++;
  alert("<RockPaperScissors> Computer Beats Player");
  alert("<RockPaperScissors> Player has Selected " + pChoice + " | Computer has Selected " + cChoice + " - Player Score: " + playerScore + " | Computer Score " + comScore)

}

else if (pChoice == "PAPER" && cChoice == "SCISSORS")
{
  comScore++;
  alert("<RockPaperScissors> Computer Beats Player");
  alert("<RockPaperScissors> Player has Selected " + pChoice + " | Computer has Selected " + cChoice + " - Player Score: " + playerScore + " | Computer Score " + comScore)

}

else if (pChoice == "SCISSORS" && cChoice == "PAPER")
{
  playerScore++;
  alert("<RockPaperScissors> Player Beats Computer");
  alert("<RockPaperScissors> Player has Selected " + pChoice + " | Computer has Selected " + cChoice + " - Player Score: " + playerScore + " | Computer Score " + comScore)

}

else if (pChoice == "SCISSORS" && cChoice == "ROCK")
{
  comScore++;
  alert("<RockPaperScissors> Computer Beats Player");
  alert("<RockPaperScissors> Player has Selected " + pChoice + " | Computer has Selected " + cChoice + " - Player Score: " + playerScore + " | Computer Score " + comScore)

}

else if (pChoice == "PAPER" && cChoice == "ROCK")
{
  pScore++;
  alert("<RockPaperScissors> Player Beats Computer");
  alert("<RockPaperScissors> Player has Selected " + pChoice + " | Computer has Selected " + cChoice + " - Player Score: " + playerScore + " | Computer Score " + comScore)

}
else

pChoice === cChoice

alert("<RockPaperScissors> Player AND Computer Has DRAW");
alert("<RockPaperScissors> Player has Selected " + pChoice + " | Computer has Selected " + cChoice + " - Player Score: " + playerScore + " | Computer Score " + comScore);

}


}

if (pScore == 3)
{
  alert("Player Has Won The Game");
}

else if (comScore == 3)
{
  alert("Computer Has Won The Game");
}
