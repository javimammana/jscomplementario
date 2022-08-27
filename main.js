let nombre = prompt ("Bienvenido al centro de atención, Ingresa tu nombre");
let opcion = prompt ("hola "+nombre+", en que podemos ayudarte? \n Atencion al cliente \n Soporte Tecnico \n Ventas \n Salir");

while(opcion != "Salir" || "SALIR" || "salir") {
    switch (opcion) {
        case "atencion al cliente" || "Atencion al cliente" || "ATENCION AL CLIENTE":
            let consulta = prompt ("Ingrese su consulta aqui...");
            let mail = prompt ("Ingrese su mail...");
            alert ("A la brevedad, contestaremos tu consulta por mail, gracias!");
            console.log ("El usuario " + nombre + " nos pregunta " + consulta + " y necesita la respuesta al mail: " + mail);
            break;

        case "soporte tecnico" || "Soporte tecnico" || "SOPORTE TECNICO":
            let problema = prompt ("Ingrese su problema aqui...");
            let telefono = prompt ("Ingrese su telefono de contacto...");
            alert ("Pronto recibiras un llamado para ayudarte, CALMEMOS LA ANSIEDAD!");
            console.log ("El usuario " + nombre + " indica el siguiente problema: " + problema + " por favor contactarlo al telefono: " + telefono);
            break;

        case "ventas" || "Ventas" || "VENTAS":
            let producto = prompt ("Que producto te interesa?");
            let contacto = prompt ("Como podemos contactarte?");
            alert ("A la brevedad te contactaremos para quitarte tu dinero...");
            console.log ("El usuario " + nombre + ", esta interesado en " + producto + " contactar via " + contacto + ", revisen si le pueden vender algo mas, no se, digo!");
            break;
    }
    break;
}