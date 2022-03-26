const indiceLibros = require("./dist/biblia/_index.json");
var libro;

const buscarEnLaBiblia = (nombreLibro, capitulo, versiculo) => {
    let cap = capitulo - 1;
    let ver = versiculo - 1;

    for (let i = 0; i < indiceLibros.length; i++) {
        if (nombreLibro === indiceLibros[i].shortTitle) {
            libro = indiceLibros[i].key;
        }
    }

    const libroRetornar = require(`./dist/biblia/${libro}`)
    return libroRetornar[cap][ver];
}

module.exports = buscarEnLaBiblia;