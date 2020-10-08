var Alumno = /** @class */ (function () {
    function Alumno() {
        this.nombre = 'sin nombre';
        this.apellido = 'sin apellido';
        this.edad = 0;
        this.mostrarMensaje();
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log('Hola ', this.nombre);
    };
    Alumno.prototype.asignar = function (nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.mostrarMensaje();
    };
    return Alumno;
}());
var alumno1 = new Alumno();
alumno1.asignar('jose', 'martinez', 15);
var alumno2 = new Alumno();
alumno2.asignar('Maria', 'Linda', 25);
