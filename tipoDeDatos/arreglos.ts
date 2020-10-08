var listaNumeros:Array<number>=[1,2,3]
console.log(listaNumeros),
console.log(listaNumeros[1]);

var listaCadenas:Array<String>=["uno","dos","tres"]
console.log(listaCadenas),
console.log(listaCadenas[1]);

interface Persona{
    nombre:String,
    edad:number
}
var listaPersonas:Array<Persona>=[
    {nombre:"once",
        edad:11},
    {nombre:"doce",
        edad:12},
    {nombre:"trece",
        edad:13}
]
console.log(listaPersonas),
console.log(listaPersonas[1]);
console.log(listaPersonas[1].nombre)

