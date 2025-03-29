/**
 * Ermittelt den Gewinner bei "Schere, Stein, Papier"
 *
 * @param player1 - Spielzug von Spieler 1 (z. B. "rock")
 * @param player2 - Spielzug von Spieler 2 (z. B. "scissors")
 * @returns 1, wenn Spieler 1 gewinnt – 2, wenn Spieler 2 gewinnt – 0 bei Unentschieden
 * @throws Error, wenn einer der Züge ungültig ist
 */
export function play(player1: string, player2: string): number {
  // Erlaubte Spielzüge
  const validMoves = ["rock", "paper", "scissors"];

  // Eingaben bereinigen: trimmen + klein schreiben
  const move1 = player1.trim().toLowerCase();
  const move2 = player2.trim().toLowerCase();

  // Gültigkeit prüfen
  if (!validMoves.includes(move1)) {
    throw new Error(`Invalid move: ${player1}`);
  }
  if (!validMoves.includes(move2)) {
    throw new Error(`Invalid move: ${player2}`);
  }

  // Unentschieden
  if (move1 === move2) return 0;

  // Spieler 1 gewinnt
  if (
    (move1 === "rock" && move2 === "scissors") ||
    (move1 === "scissors" && move2 === "paper") ||
    (move1 === "paper" && move2 === "rock")
  ) {
    return 1;
  }

  // Spieler 2 gewinnt
  return 2;
}
