
console.clear()
var myScore = 0
var computerScore = 0
var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"] // 13 cards. zero based so: 0-12

while (myScore < 5 && computerScore < 5)
  {
    alert(`Ready? score is human:${myScore} computer:${computerScore}`)
    
    var myCard = Math.floor(Math.random() * 13)    // gives a random number between 0-12 
    var computer = Math.floor(Math.random() * 13)  // gives a random  number between 0-12

    console.log(cards[ myCard ] )
    console.log(cards[ computer ] )
    
    if (myCard > computer)
      {
        // i won this round
        alert(`I won! ${cards[myCard]} ${cards[computer]}`)
        myScore++;
      }
    else if (myCard < computer)
      {
        // computer won this round
        alert(`Computer won! ${cards[myCard]} ${cards[computer]}`)
        computerScore++;
      }
    else
      {
        // tie
        alert(`Tie! ${cards[myCard]} ${cards[computer]}`)
      }
    
  }

    if (myScore == 5)
      {
        alert("I won the game!!")
      }
		else
  	{
	    alert("computer won the game ... booooo ")
	  }
