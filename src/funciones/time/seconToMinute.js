export function seconToMinute(sec){
     // Calcula los minutos y segundos
  let minutes = Math.floor(sec / 60);
  let segundosRestantes = Math.floor(sec % 60);
  
  // Formatea los minutos y segundos para que tengan dos dígitos
  let resultMinutes = minutes < 10 ? "0" + minutes : minutes;
  let resultSec = segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes;
  
  // Devuelve el resultado en formato "00:00"
  return resultMinutes + ":" + resultSec;
}