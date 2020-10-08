interface Persona{
    nombre:String,
    apellido:String,
}

var listado:Array<Persona>=[
    {nombre:"Jose",
        apellido:"Len",},
    {nombre:"Maria",
        apellido:"Liz",},
    {nombre:"Jhon",
        apellido:"Wick",},
]

console.log(listado);

console.log("///////////////");
for (var i :number= 0; i < listado.length; i++) {
    console.log(listado[i]);
}

console.log("///////////////");
for(let i in listado){
    console.log(listado[i]);
}