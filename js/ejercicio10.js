const filas = parseInt(prompt("Por favor, ingrese el número de filas:"));
const columnas = parseInt(prompt("Por favor, ingrese el número de columnas:"));

document.write("<table border='1'>");
let numero = filas * columnas;

for (let i = 0; i < filas; i++) {
  document.write("<tr>");
  for (let j = 0; j < columnas; j++) {
    document.write("<td>" + numero + "</td>");
    numero--;
  }
  document.write("</tr>");
}

document.write("</table>");