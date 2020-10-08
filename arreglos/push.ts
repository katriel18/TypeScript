//var nombres:String[];//error
var nombres:String[]=[];
console.log(nombres);
nombres.push('Jose');
console.log(nombres);
nombres.push('Maria');
console.log(nombres);
console.log(nombres);
nombres.push('Jhon');
console.log(nombres);
nombres.push('Juan');
console.log(nombres);

interface Alumno{
    nombre:String,
    apellido:String,
}
var alumnos:Alumno[]=[];
console.log(alumnos);
alumnos.push({nombre:"Ana",apellido:"Maria"});
console.log(alumnos);
var nuevoAlumno:Alumno={
    nombre:"Carmen",
    apellido:"Flores",
}
alumnos.push(nuevoAlumno);
console.log(alumnos);