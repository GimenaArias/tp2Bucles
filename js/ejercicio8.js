const tope = parseInt(prompt("Ingresa el número tope de la piramide, no mayor de 50:"));

if (!isNaN(tope) && tope > 0 && tope <= 50) {
  for (let i = 1; i <= tope; i++) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
      linea += j;
    }
    document.write(linea + "<br>");
  }
} else {
  alert("Ingresa un número entre 1 y 50");
}