
import { calcPoints, possibleCheckout } from "./darts";

describe("calcPoints", () => {
  test.each([
    ["3 20 1 17 2 4", 85],
    ["2 15 1 18 3 19", 105],
    ["3 20 1 5", 65],
    ["1 20", 20],
    ["", 0],
    ["0 0", 0],
  ])('calcPoints("%s") === %i', (input, expected) => {
    expect(calcPoints(input)).toBe(expected);
  });

  test("throws error on invalid input", () => {
    expect(() => calcPoints("3")).toThrow("Invalid input: missing value");
    expect(() => calcPoints("a b")).toThrow("Invalid input: NaN");
  });
});

describe("possibleCheckout", () => {
  test.each([
    [477, "Double 12"], // 501 - 477 = 24 → 12*2
    [441, "Double 30"], // 60 → 30*2 (technisch korrekt, obwohl nicht realistisch auf Dartboard)
    [480, null],        // 21 → ungerade
    [500, "Double 0"],  // 1 → ungerade
    [501, null],        // 0 → darf nicht 0 sein
  ])("possibleCheckout(%i) === %s", (score, expected) => {
  expect(possibleCheckout(441)).toBe(expected);
  });
});
