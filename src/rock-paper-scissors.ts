export function play(player1: string, player2: string): number {
  player1 = player1.trim().toLowerCase();
  player2 = player2.trim().toLowerCase();

 
  if ((player1 != "rock" && player1 != "paper" && player1 != "scissors") || (player2 != "rock" && player2 != "paper" && player2 != "scissors")) 
    {
    throw new Error('Ungültiger Spielzug');
  }
 

  if  (player1 == player2) 
  {
    return 0;
  }
  else if ((player1 == "rock" && player2 == "scissors") || (player1 == "scissors" && player2 == "paper") || (player1 == "paper" && player2 == "rock")) 
  {
    return 1;
  } 
  else 
  {
        return 2; }
}

