let edad = 30;
let nombre = "Maria";
let segundoNombre = "";

let edadFinal = edad ?? 0; // ?? pone el resultado de la izq o de la der
let nombreFinal = nombre ?? "amiga";
let segundoNombreFinal = segundoNombre ?? "falta ingresar segundo nombre";

//console.log(edad, nombre, segundoNombre);
console.log(segundoNombreFinal); // devuleve vacio porque esta ??


// || -> pone el mensaje "falta ingresar segundo nombre"
// ?? -> deja vacio

