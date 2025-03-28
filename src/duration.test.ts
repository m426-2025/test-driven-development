
import { formatDuration } from './duration';


describe("Sekunden Formatieren", () => {
    test.each([
      [33, "33s"],
       [123, "2m3s"],
      [3600, "1h"],
      [0, "0s"],
      [59.5, "1m"],
    ])("%i Sekunden == %s", (a, expected) => {
      expect(formatDuration(a)).toBe(expected);

    });
  
     test("negative Eingabe", () => {
      expect(() => formatDuration(-5)).toThrow();
    });

  });
