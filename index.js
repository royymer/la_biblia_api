const buscarEnLaBiblia = require("./libros");
const libro = "Proverbios";
const capitulo = 31 ;
const versiculoInicio = 6;
const versiculoFin = 6 ;

versiculoInicio === versiculoFin ? 
console.log(`${libro} ${capitulo}:${versiculoInicio}`) : 
console.log(`${libro} ${capitulo}:${versiculoInicio}-${versiculoFin}`) ;

for (let versiculo = versiculoInicio; versiculo <= versiculoFin; versiculo++) {
    const texto = buscarEnLaBiblia(libro ,capitulo,versiculo);
    console.log(`${versiculo}. ${texto}`);
}
