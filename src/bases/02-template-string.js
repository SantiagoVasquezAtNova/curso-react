
const nombre = 'santiago';
const apellido = 'vasquez';

const nombreCompleto = ` ${ nombre } ${ apellido } ${ 1 + 1} `;

console.log( nombreCompleto);


function getSaludo(nombre) {
    return 'hola ' + nombre;
}

console.log( `este es un texto: ${ getSaludo( nombre )}` )
