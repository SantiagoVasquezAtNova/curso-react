
const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
        ciudad: 'new york',
        zip: 56797649,
        lat: 872487,
        lng: 49.73928
    }
};

const persona2 = {...persona};
persona2.nombre = 'peter';


console.log( persona );
console.log( persona2 );
console.table(persona);