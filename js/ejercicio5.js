while (true) {
    const dni = prompt("Ingresa el número de DNI o pulsa 'cancelar' para salir:");

    if (dni === null) {
      break;
    }
    const numeroDNI = parseInt(dni);
    if (!isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999) {
      const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
      const resto = numeroDNI % 23;
      const letraDNI = letrasDNI.charAt(resto);

      alert(`El DNI ${numeroDNI} corresponde a la letra: ${letraDNI}`);
    } else {
      alert("Número de DNI no válido");
    }
  }