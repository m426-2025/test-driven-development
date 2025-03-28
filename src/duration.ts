export function formatDuration(seconds: number): string {
  if (seconds < 0) 
    throw new Error("Negative numbers are not allowed.");

  //Nachkommastellen von Sekundenangaben werden durch Rundung eliminiert
  seconds = Math.round(seconds);

  //Stundenberechnung
  const hours = Math.floor(seconds / 3600); //Abrundung (Math.floor()), weil eine Reststunde keine Stunde ist.

  //Stundenabzug von Gesamtsekunden
  seconds %= 3600;

  //Minutenberechnung
  const minutes = Math.floor(seconds / 60);

  //Minutenabzug von Gesamtsekunden
  seconds = Math.floor(seconds % 60);

  let result = ''; //"let" wird hier verwendet, weil der Wert der Variables im Verlauf des Codes geändert werden muss
  const hoursAndMinutesAreZero = (hours === 0 && minutes === 0); //=== prüft Wert und Datentyp, ohne Typumwandlung.
  
  if (hours > 0) result += `${hours}h`; //Backticks (`) wird verwendet, weil man Variablen oder Ausdrücke in Strings einfügen will.
  if (minutes > 0) result += `${minutes}m`;
  if (seconds > 0 || hoursAndMinutesAreZero) result += `${seconds}s`;
  
  return result;
}
