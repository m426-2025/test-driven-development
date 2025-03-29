import { calcPoints, possibleCheckout } from "./darts";

describe("calcPoints", () => {
  test("normaler Wurf", () => {
    expect(calcPoints("3 20 1 17 2 4")).toBe(85); // 60 + 17 + 8
  });

  test("einfacher Wurf", () => {
    expect(calcPoints("1 20")).toBe(20);
  });

  test("leere Eingabe", () => {
    expect(calcPoints(" ")).toBe(0);
  });

  test("ungültige Eingabe: ungerade Anzahl", () => {
    expect(() => calcPoints("3 20 1")).toThrow("Unvollständige Wurfdaten");
  });

  test("ungültige Eingabe: kein Zahlwert", () => {
    expect(() => calcPoints("a b")).toThrow("Keine Zahl");
  });
});

describe("possibleCheckout", () => {
  test("gültiger Checkout", () => {
    expect(possibleCheckout(477)).toBe("Double 12"); // 501 - 477 = 24
  });

  test("ungerader Rest", () => {
    expect(possibleCheckout(480)).toBeNull(); // 21 → ungerade
  });

  test("Rest > 40 (kein Double mehr möglich)", () => {
    expect(possibleCheckout(440)).toBeNull(); // 61 → > 20*2
  });

  test("Rest = 0 oder negativ", () => {
    expect(possibleCheckout(501)).toBeNull();
    expect(possibleCheckout(510)).toBeNull();
  });
});
