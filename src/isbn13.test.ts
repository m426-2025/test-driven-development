import { isValid } from './isbn13';

describe("Prüfe ISBN-13 Buchnummern", () => {

  test("Gültige Nummer", () => {
    expect(isValid("9780306406157")).toBe(true);
  });

  test("Falsche Prüfziffer", () => {
    expect(isValid("9780306406158")).toBe(false);
  });
    test("zu kurze Nummer", () => {
        expect(isValid("1234")).toBe(false);
    });
    test("Bustaben in Nummer", () => {
      expect(isValid("123456789AAAA")).toBe(false);
    });

  });
