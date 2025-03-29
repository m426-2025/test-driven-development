export function isValid(isbn: string): boolean {
    // Prüfe: nur genau 13 Ziffern erlaubt
    if (!/^\d{13}$/.test(isbn)) {
      throw new Error("Invalid ISBN-13");
    }
  
    const digits = isbn.split("").map(Number); // Ziffern als Array
  
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      const weight = i % 2 === 0 ? 1 : 3;       // abwechselnd 1 und 3
      sum += digits[i] * weight;
    }
  
    const checkDigit = (10 - (sum % 10)) % 10;  // Prüfziffer berechnen
  
    return digits[12] === checkDigit;           // Vergleich mit letzter Ziffer
  }
  