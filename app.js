let colorIngresado = prompt("Que color obtienes al mezclar rojo con amarillo?");
let color = colorIngresado;
if (color === "naranja") {
  alert("Perfecto, ese es el color!");
} else if (color === "Naranja") {
  alert("Perfecto, hasta has puesto la mayuscula!.");
} else {
  alert("mmm...lindo color, pero no es el que estoy buscando.");
}

alert("Siguiente pregunta...");

let nombreIngresado = prompt("como es tu Nombre?");
let nombre = nombreIngresado;
if (nombre === "Emiliano") {
  alert("Ya lo sabia, hasta lo puse en el Index.");
} else if (nombre === "emiliano") {
  alert(
    "Creo que los nombres van con la primera letra en mayuscula. Intentalo de nuevo!"
  );
} else {
  alert("No sos mi tutor...quien eres?");
}
