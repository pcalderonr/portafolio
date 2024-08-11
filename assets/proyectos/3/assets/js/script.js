var opcion = prompt(
  "¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas"
);

menu(opcion);

//FUNCIONES
function menu(opciones) {
  let op = parseInt(opciones);
  switch (op) {
    case 1:
      op1();
      break;
    case 2:
      op2();
      break;
    case 3:
      op3();
      break;
    case 4:
      op4();
      break;
    default:
      alert(
        "La opción ingresada no es válida. Gracias por preferir nuestros servicios"
      );
      break;
  }
}

function op1() {
  let submenu = parseInt(
    prompt("Selecciones una opción.\n1.- Ver boleta\n2.- Pagar boleta")
  );
  switch (submenu) {
    case 1:
      alert("Haga clic aquí para descargar su boleta");
      break;
    case 2:
      alert("Usted esta siendo transferido. Espere por favor...");
      break;
    default:
      alert(
        "La opción ingresada no es válida. Gracias por preferir nuestros servicios"
      );
      break;
  }
}

function op2() {
  prompt(
    "Selecciones una opción.\n1.- Problemas con la señal\n2.- Problemas con las llamadas"
  );
  let respuesta = prompt("A continuación escriba su solicitud");
  alert(
    "Estimado usuario, su solicitud: '" +
      respuesta +
      "' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos"
  );
}

function op3() {
  let sub3 = prompt(
    "¡Mentel tiene una oferta comercial acorde a tus necesidades\n Para conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'"
  );
  switch (sub3.toUpperCase()) {
    case "SI":
      alert("Un ejecutivo contactará con usted");
      break;
    case "NO":
      alert("Gracias por preferir nuestros servicios");
      break;
    default:
      alert(
        "La opción ingresada no es válida. Gracias por preferir nuestros servicios"
      );
      break;
  }
}

function op4() {
  let respuesta = prompt("A continuación escriba su consulta");
  alert(
    "Estimado usuario, su consulta: '" +
      respuesta +
      "' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos"
  );
}
