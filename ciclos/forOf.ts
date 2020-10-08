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
for (var i :number= 0; i < listado.length; i++) {
    console.log("Bienvenido ", listado[i]);
}

console.log("///////////////");
for(let usuario of listado){
    console.log(usuario);
}