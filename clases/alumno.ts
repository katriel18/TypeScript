class Alumno{

    private nombre:String;
    private apellido:String;
    private edad:number;

    constructor(){
        this.nombre='sin nombre';
        this.apellido='sin apellido';
        this.edad=0;

        this.mostrarMensaje();
    }
    private mostrarMensaje(){
        console.log('Hola ',this.nombre);
    }

    asignar(nombre:String,apellido:String,edad:number){

        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;

        this.mostrarMensaje();
    }
}

var alumno1:Alumno=new Alumno();
alumno1.asignar('jose','martinez',15);

var alumno2=new Alumno();
alumno2.asignar('Maria','Linda',25);

