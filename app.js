let respuestaIngresada = prompt(
  "Que color obtienes al mezclar Azul con Amarillo?"
);
let respuesta = respuestaIngresada.toLowerCase();
while (respuesta != "verde") {
  respuesta = prompt(
    "Mmm...nope, no es ese el color! \nTip: en ingles se escribre 'Green'."
  );
}
alert("El color de la esperanza!");

alert("Siguiente pregunta...");

let nombreIngresado = prompt("como es tu Nombre?");
let nombre = nombreIngresado.toLowerCase();
while (nombre != "emiliano") {
  nombre = prompt("Intentalo de nuevo.");
}
alert(
  "Fun Fact: Emiliano es de origen latino y significa 'Trabajador laborioso'."
);

alert("Uff, demasiadas preguntas...te parece si contamos hasta diez?");

for (let i = 1; i <= 20; i++) {
  if (i === 11) {
    break;
  }
  alert(i);
}
