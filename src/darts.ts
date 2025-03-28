export function calcPoints(hits: string): number {
  //Überprüfen ob es leerer String ist,
  //nachdem man Leerzeichen davor und danach entfernt hat
  if (hits.trim() === "") return 0;

  //Splittung der Strings bei Leerzeichen,
  //Konvertiere die Strings zu Zahlen und füge sie der Array hinzu
  const numbers = hits.split(" ").map(Number);
  if (numbers.length % 2 !== 0) {
    throw new Error(
      "Ungueltiges Eingabeformat: Jeder Ring/Multiplikator benötigt ein Trefferwert."
    );
  }

  let score = 0;
  //Array wird durchgegangen, um den score zu berechnen
  for (let index = 0; index < numbers.length; index += 2) {
    const multiplier = numbers[index]; //zuerst kommt der Ring/Multiplikator
    const hitNumber = numbers[index + 1] || 0; //danach kommt die getroffene Zahl

    if (![1, 2, 3].includes(multiplier) || hitNumber < 1 || hitNumber > 20) {
      throw new Error("Ungueltiger Ring/Multiplikator oder Trefferwert.");
    }

    score += multiplier * hitNumber;
  }

  return score;
}

export function possibleCheckout(x: number): string {
  const remaining = 501 - x;
  const doubleValue = remaining / 2;

  if (remaining % 2 !== 0 && !(doubleValue < 1))
    return "unmöglich, da ungerade";

  if (doubleValue < 1) {
    return "Kein Checkout möglich, da der Wert zu niedrig ist";
  }

  if (doubleValue > 20) {
    return `unmöglich, da ${doubleValue}>20`;
  }

  return `Double ${remaining / 2}`;
}
