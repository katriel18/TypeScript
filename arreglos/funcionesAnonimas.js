//funciones anonimas,expresiones lamba , funciones flechas
var nombres = ['Jose', 'Maria', 'Jhon', 'Juan'];
nombres.forEach(function (nombre) { return console.log(nombre); });
nombres.forEach(function (nombre) {
    if (nombre == "Jhon") {
        console.log("Jhon en la lista");
    }
});
