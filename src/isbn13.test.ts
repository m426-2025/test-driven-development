import { isValid } from "./isbn13";

describe("isValid", () => {
  test("valid ISBN-13 examples", () => {
    expect(isValid("9783161484100")).toBe(true);  // gültig
    expect(isValid("9780306406157")).toBe(true);  // gültig
    expect(isValid("9781861972712")).toBe(true);  // gültig
  });

  test("invalid ISBNs with wrong check digit", () => {
    expect(isValid("9783161484101")).toBe(false); // letzte Ziffer falsch
    expect(isValid("1234567890123")).toBe(false); // falsche Prüfziffer
  });

  test("throws error for invalid input format", () => {
    expect(() => isValid("97831614841AB")).toThrow("Invalid ISBN-13"); // Buchstaben
    expect(() => isValid("97831614")).toThrow("Invalid ISBN-13");      // zu kurz
    expect(() => isValid("")).toThrow("Invalid ISBN-13");              // leer
  });
});
