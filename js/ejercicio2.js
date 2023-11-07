const nota = parseFloat(prompt("Ingrese una nota del 0 al 10:"));

if (!isNaN(nota) && nota >= 0 && nota <= 10) {

  let calificacion = "";

  if (nota >= 0 && nota <= 2) {
    calificacion = "Muy deficiente";
  } else if (nota >= 3 && nota <= 4) {
    calificacion = "Insuficiente";
  } else if (nota >= 5 && nota <= 6) {
    calificacion = "Suficiente";
  } else if (nota === 7) {
    calificacion = "Bien";
  } else if (nota >= 8 && nota <= 9) {
    calificacion = "Notable";
  } else if (nota === 10) {
    calificacion = "Sobresaliente";
  }

  alert(calificacion);

} else if (isNaN(nota)) {
  alert("Introduce un número válido.");
} else {
  alert("Número erróneo");
}