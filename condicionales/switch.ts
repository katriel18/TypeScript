//1 menu de canciones
//2 menu de albumnes
//3 menu de perfil

var opcion:number=2;

switch(opcion){

    case 1:{
        console.log("Canciones");
        break;
    }
    case 2:{
        console.log("Albumnes");
        break;
    }
    case 3:{
        console.log("Perfil");
        break;
    }
    default:{
        console.log("El menu no existe!");
    }
}

//usando enumerables
enum menu{
    canciones=1,
    albumnes=2,
    perfil=3,
}
switch(opcion){

    case menu.canciones:{
        console.log("Canciones");
        break;
    }
    case menu.albumnes:{
        console.log("Albumnes");
        break;
    }
    case menu.perfil:{
        console.log("Perfil");
        break;
    }
    default:{
        console.log("El menu no existe!");
    }
}