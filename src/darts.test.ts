import { calcPoints, possibleCheckout } from "./darts";

describe("calcPoints", () => {
  test("calculate score", () => {
    expect(calcPoints("3 20 1 17 2 4")).toBe(85);
    expect(calcPoints("2 15 1 18 3 19")).toBe(105);
    expect(calcPoints("3 20 1 5")).toBe(65);
  });

  test("hits is empty return 0", () => {
    expect(calcPoints(" ")).toBe(0);
  });
});

test("invalid input throws error", () => {
  expect(() => calcPoints("3 20 1")).toThrow(
    "Ungueltiges Eingabeformat: Jeder Ring/Multiplikator benötigt ein Trefferwert."
  );
  expect(() => calcPoints("4 20 1 18")).toThrow(
    "Ungueltiger Ring/Multiplikator oder Trefferwert."
  );
});

describe("possibleCheckout", () => {
  test("x is 477 return Double 12", () => {
    expect(possibleCheckout(477)).toBe("Double 12");
  });
  test("x is 461 return Double 20", () => {
    expect(possibleCheckout(461)).toBe("Double 20");
  });
  test("x is 480 return unmöglich, da ungerade", () => {
    expect(possibleCheckout(480)).toBe("unmöglich, da ungerade");
  });
  test("x is 441 return unmöglich, da 30>20", () => {
    expect(possibleCheckout(441)).toBe("unmöglich, da 30>20");
  });
  test("x is 500 return Kein Checkout möglich, da der Wert zu niedrig ist", () => {
    expect(possibleCheckout(500)).toBe(
      "Kein Checkout möglich, da der Wert zu niedrig ist"
    );
  });
});
