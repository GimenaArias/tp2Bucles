let cadenasConcatenadas = "";

while (true) {
  const cadena = prompt("Ingrese una cadena de texto o pulsa cancelar para salir: ");

  if (cadena === null) {
    break;
  }
  cadenasConcatenadas += cadena + "  ";
}
alert("Cadenas concatenadas: " + cadenasConcatenadas);