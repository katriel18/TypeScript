interface Alumno{
    id:number;
    nombre:String,
    apellido:String,
}
var alumnos:Alumno[]=[];
console.log(alumnos);

var nuevoAlumno:Alumno={
    id:1,
    nombre:"Carmen",
    apellido:"Flores",
}
alumnos.push(nuevoAlumno);
nuevoAlumno={id:2,nombre:"Ana",apellido:"Luz"};
alumnos.push(nuevoAlumno);
nuevoAlumno={id:3,nombre:"Jhon",apellido:"Carlos"};
alumnos.push(nuevoAlumno);
nuevoAlumno={id:4,nombre:"Juan",apellido:"Soreto"};
alumnos.push(nuevoAlumno);

console.log(alumnos);

var alumnoEncontrado=alumnos.find((alumno)=>{
   return  alumno.id==2;
});
console.log(alumnoEncontrado);

alumnoEncontrado=alumnos.find((alumno)=>{
    return alumno.nombre.includes("ho");
 });
 console.log(alumnoEncontrado);
