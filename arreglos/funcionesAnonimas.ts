//funciones anonimas,expresiones lamba , funciones flechas
var nombres: String[] = ['Jose', 'Maria', 'Jhon', 'Juan'];

nombres.forEach(nombre => console.log(nombre));

nombres.forEach((nombre) => {
    if (nombre == "Jhon") {

        console.log("Jhon en la lista")
    }

});