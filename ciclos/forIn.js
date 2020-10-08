var listado = [
    { nombre: "Jose",
        apellido: "Len" },
    { nombre: "Maria",
        apellido: "Liz" },
    { nombre: "Jhon",
        apellido: "Wick" },
];
console.log(listado);
console.log("///////////////");
for (var i = 0; i < listado.length; i++) {
    console.log(listado[i]);
}
console.log("///////////////");
for (var i_1 in listado) {
    console.log(listado[i_1]);
}
