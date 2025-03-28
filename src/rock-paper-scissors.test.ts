import { play } from './rock-paper-scissors';

describe("Schere Stein Papier", () => {
  test.each([
    ["Rock", "scissors", 1], 
    ["scissors", "ROCK ", 2],  
    [" paper", "  rock", 1],     
    ["rock", "paper", 2],     
    ["scissors", "paper", 1], 
    ["paper  ", "scissors", 2], 
    ["rock", "rock", 0],      
    ["scissors", "Scissors", 0], 
    ["paPer", "  paper", 0],    
  ])("Spielzug %s gegen %s gewinnt %i", (player1, player2, expected) => {
    expect(play(player1, player2)).toBe(expected);

  });

  test("unerlaubtr Spielzug", () => {
     expect(() => play("hole", "rock")).toThrow();
  });

});
