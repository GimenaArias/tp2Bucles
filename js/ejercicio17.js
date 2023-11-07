const texto = prompt("Por favor, ingrese una cadena de texto:");
const textoEnMinusculas = texto.toLowerCase();
const vocales = "aeiou";
let posicion = -1;  

for (let i = 0; i < textoEnMinusculas.length; i++) {
  const caracter = textoEnMinusculas[i];
  if (vocales.includes(caracter)) {
    posicion = i; 
    break;
  }
}

if (posicion !== -1) {
  document.write(`La primera vocal encontrada está en la posición ${posicion}`);
} else {
  document.write("No se encontraron vocales en el texto ingresado");
}