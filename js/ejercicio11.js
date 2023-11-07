let nombreMayor = "";
let edadMayor = -1; 

for (let i = 1; i <= 3; i++) {
  const nombre = prompt(`Ingrese el nombre de la persona ${i}:`);
  const edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));

  if (!isNaN(edad) && edad > edadMayor) {
    edadMayor = edad;
    nombreMayor = nombre;
  }
}

if (nombreMayor !== "") {
  alert(`La persona de mayor edad es ${nombreMayor}, que tiene ${edadMayor} años`);
} else {
  alert("Edades no validas");
}