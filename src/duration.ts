export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error("Negative duration not allowed");
  }

  const rounded = Math.round(seconds);          // Sekunden runden
  const hours = Math.floor(rounded / 3600);     // Ganze Stunden
  const minutes = Math.floor((rounded % 3600) / 60); // Minuten (Rest aus Stunden)
  const secs = rounded % 60;                    // Verbleibende Sekunden

  let result = "";

  if (hours > 0) result += `${hours}h`;
  if (minutes > 0) result += `${minutes}m`;
  if (secs > 0 || result === "") result += `${secs}s`; // Immer mindestens s anzeigen

  return result;
}
