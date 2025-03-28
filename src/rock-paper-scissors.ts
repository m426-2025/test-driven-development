export function play(player1: string, player2: string): number {
  const winnerPlayer1 = 1;
  const winnerPlayer2 = 2;
  const draw = 0;
  const validMoves = ["rock", "paper", "scissors"];


  //Die Gross- und Kleinschreibung sowie führende und anschliessende Leerzeichen sollen ignoriert werden.
  // trim: Leerzeichen davor und danach werden entfernt
  // toLowerCase(): Strings werden zu Kleinbuchstaben
  player1 = player1.trim().toLowerCase();
  player2 = player2.trim().toLowerCase();
  
  //Check if moves are 
  if (!validMoves.includes(player1) || !validMoves.includes(player2)) {
    throw new Error("Invalid move.");
  }

  //Unentschieden
  if (player1 === player2) 
    return draw;

  //Player1 gewinnt
  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return winnerPlayer1;
  }
  //Player2 gewinnt, wenn Player1 oben nicht gewinnt
  return winnerPlayer2;
}
