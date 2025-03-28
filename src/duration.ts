export function formatDuration(seconds: number): string {
  if (seconds < 0) {

    throw new Error("Eingabe der Sekunden ist negativ");
  }

  seconds = Math.round(seconds);
  const hours = Math.floor(seconds / 3600);
   const minutes =  Math.floor((seconds % 3600) / 60);
  seconds = seconds % 60;

  let result = "";
  if (hours > 0) {
    result += hours + 'h' ;
  }
  if (minutes > 0) {
    result += minutes + 'm';

  }
  if (seconds > 0 || result == "") {
    result += seconds +'s';
  }
   return result;

}