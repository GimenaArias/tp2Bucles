const edad = parseInt(prompt("Por favor, ingresa tu edad:"));


if (!isNaN(edad)) {
  if (edad >= 18) {
    alert("¡Ya puedes conducir!");
  } else {
    alert("Sos menor de edad y no podes conducir");
  }
} else {
  alert("La edad ingresada es un numero invalido");
}