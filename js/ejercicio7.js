const tope = parseInt(prompt("Ingresa un número no mayor que 50:"));

if (!isNaN(tope) && tope > 0 && tope <= 50) {
  for (let i = tope; i >= 1; i--) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
      linea += i;
    }
    document.write(linea + "<br>");
  }
} else {
  alert("Ingresa un número entre 1 y 50");
}