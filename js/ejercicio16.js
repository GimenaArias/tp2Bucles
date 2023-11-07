const texto = prompt("Ingresa una cadena de texto:");
let textoAlReves = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoAlReves += texto[i];
}

console.log("Texto al revés:", textoAlReves);