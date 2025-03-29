import { play } from "./rock-paper-scissors";

describe("play", () => {
  test("player 1 wins", () => {
    expect(play("rock", "scissors")).toBe(1);
    expect(play("paper", "rock")).toBe(1);
    expect(play("scissors", "paper")).toBe(1);
  });

  test("player 2 wins", () => {
    expect(play("scissors", "rock")).toBe(2);
    expect(play("rock", "paper")).toBe(2);
    expect(play("paper", "scissors")).toBe(2);
  });

  test("draw", () => {
    expect(play("rock", "rock")).toBe(0);
    expect(play("paper", "paper")).toBe(0);
    expect(play("scissors", "scissors")).toBe(0);
  });

  test("ignores case and whitespace", () => {
    expect(play(" Rock ", "SCISSORS")).toBe(1);
    expect(play(" paper", "rock ")).toBe(1);
    expect(play("SCISSORS", " Paper ")).toBe(1);
  });

  test("throws on invalid moves", () => {
    expect(() => play("banana", "rock")).toThrow("Invalid move: banana");
    expect(() => play("rock", "dragon")).toThrow("Invalid move: dragon");
  });
});
