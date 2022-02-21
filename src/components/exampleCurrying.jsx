function log(date) {
    return (prioridad) => (mensaje)=>
    console.log(date, prioridad, mensaje)//?
}

let logActual =log("hoy");
let logInformacion = logActual("para mañana");
logInformacion("esto es una prueba")


//estoy pasando 3 parametros, primero hoy, despues para mañana y por ultmo esto es una prueba