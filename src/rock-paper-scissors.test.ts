import { play } from "./rock-paper-scissors";

describe("play", () => {
  test.each([
    ["rock", "scissors", 1],
    ["paper", "rock", 1],
    ["scissors", "paper", 1],
    ["scissors", "rock", 2],
    ["rock", "paper", 2],
    ["paper", "scissors", 2],
    ["rock", "rock", 0],
    ["paper", "paper", 0],
    ["scissors", "scissors", 0],
    [" Rock ", "  PAPER ", 2],
    ["SCISSORS", "rock", 2],
  ])('play("%s", "%s") === %d', (p1, p2, expected) => {
    expect(play(p1, p2)).toBe(expected);
  });

  test("throws error on invalid move", () => {
    expect(() => play("banana", "rock")).toThrow("Invalid move: banana");
    expect(() => play("rock", "fire")).toThrow("Invalid move: fire");
  });
});
