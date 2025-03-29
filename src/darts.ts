// Berechnet die Punkte einer Runde Darts basierend auf "multiplikator sektor ..."
export function calcPoints(hits: string): number {
  if (!hits.trim()) return 0;

  const parts = hits.trim().split(/\s+/);

  if (parts.length % 2 !== 0) {
    throw new Error("Ungültige Eingabe: Unvollständige Wurfdaten");
  }

  let total = 0;

  for (let i = 0; i < parts.length; i += 2) {
    const multiplier = Number(parts[i]);
    const sector = Number(parts[i + 1]);

    if (isNaN(multiplier) || isNaN(sector)) {
      throw new Error("Ungültige Eingabe: Keine Zahl");
    }

    total += multiplier * sector;
  }

  return total;
}

// Gibt einen Double Checkout Wurf zurück oder null
export function possibleCheckout(currentScore: number): string | null {
  const rest = 501 - currentScore;

  if (rest <= 0 || rest % 2 !== 0) return null;

  const sector = rest / 2;

  if (sector < 1 || sector > 20) return null;

  return `Double ${sector}`;
}
