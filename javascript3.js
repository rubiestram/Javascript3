/*
    1.- Crea un menú con una lista de animales.
    2.- Permite que el usuario pueda seleccionar el animal.
    3- Muestra por consola un diseño del animal basado en la decisión del usuario.
*/


console.log("Bienvenido a Elige un Animal");
const opcionMenu = parseInt(prompt("Seleccione un animal: \n1: Perro \n2: Gato \n3: Conejo \n0: Salir"));


    switch (opcionMenu) {
        case 1: 
            console.log("\
             __      _\n\
            o'')}____//\n\
             `_/      )\n\
             (_(_/-(_/\n");
            break;
        case 2:
            console.log("\
                 /\_/\  (\n\
                ( ^.^ ) _)\n\
                  \"/  (\n\
                ( | | )\n\
               (__d b__)\n");
            break;
        case 3:
            console.log("\
            //\n\
           ('>\n\
           /rr\n\
          *\))_\n");
            break;
        case 0:
            break;
        default: 
            alert("Opción invalida")
            break;
    }






