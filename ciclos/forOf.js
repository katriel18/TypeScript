var listado = [
    { nombre: "Jose",
        apellido: "Len" },
    { nombre: "Maria",
        apellido: "Liz" },
    { nombre: "Jhon",
        apellido: "Wick" },
];
for (var i = 0; i < listado.length; i++) {
    console.log("Bienvenido ", listado[i]);
}
console.log("///////////////");
for (var _i = 0, listado_1 = listado; _i < listado_1.length; _i++) {
    var usuario = listado_1[_i];
    console.log(usuario);
}
