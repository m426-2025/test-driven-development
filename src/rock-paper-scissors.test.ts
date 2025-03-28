import { play } from "./rock-paper-scissors";

describe("Rock Paper Scissors", () => {
    test.each([
      ["rock", "scissors", 1],
      ["scissors", "rock", 2],
      ["paper", "rock", 1],
      ["rock", "paper", 2],
      ["scissors", "paper", 1],
      ["paper", "scissors", 2],
      ["rock", "rock", 0]
    ])("player1 plays %s player2 plays %s return %d", (player1, player2, expected) => {
      expect(play(player1, player2)).toBe(expected);
    });
  
    test("invalid move throws an error", () => {
      expect(() => play("lizard", "rock")).toThrow("Invalid move.");
    });
});