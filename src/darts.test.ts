import { possibleCheckout, calcPoints } from './darts';


describe("Punkte dieser runde Zählen", () => {
    test("Triple 20, Single 17, Double 4", () => {
      expect(calcPoints("3 20 1 17 2 4")).toBe(85);
    });
    test("Double 15 + Single 18 + Triple 19", () => {
        expect(calcPoints("2 15 1 18 3 19")).toBe(105);
      });
      test("einmal Daneben geworfen", () => {
        expect(calcPoints("3 20 1 5")).toBe(65);
      });
});



describe("Checkout möglichkeiten", () => {

  test("Bulls Eye", () => {
     expect(possibleCheckout(451)).toBe("Bulls Eye");
  });

  test("Doppel 12", () => {
    expect(possibleCheckout(477)).toBe("Double 12");
  });

    test("ungerader rest", () => {
        expect(possibleCheckout(480)).toBe('unmöglich');
    });
    test("zu viel rest", () => {
      expect(possibleCheckout(441)).toBe('unmöglich');

    });

  });