//creamos la estructura básica de personajes y juego.

//clase luchador, con sus propiedades y métodos.



class Fighter {
  constructor(nombre, fuerza, ataque, defensa, agilidad, magia, vida) {

        this.nombre = nombre;
        this.fuerza = fuerza;
        this.ataque = ataque;
        this.defensa = defensa;
        this.agilidad = agilidad;
        this.vida = 100;
    }

    atacar(enemigo){

        /*En este caso tenemos la referencia de una lógica muy básica para programar el ataque.
         Declaramos una variable luck que será igual al resultado que nos devuelve una función random 
        que tenemos en el archivo utiles.js, los parámetros que devuelve esta función tienen un mínimo de 1
        y un máximo de la suerte del enmigo
        */

        let suerte = funciones.random(1, equipo2.agilidad);

        /*A continuación, depositamos en la variable hit, el resultado de primero restarle la defensa 
        del enemigo al luchador que emite el golpe, y posteriormente multiplicarlo por la variable luck
        obtenida antes.*/

        let ataque = (this.nombre - equipo2.defensa) * suerte;


        /*finalmente , restamos a la vida del enemigo el valor establecido en el golpe (hit)*/
        enemigo.cordura -= hit;
    }

    defender(){
        let defensa
        

    }

    esquivar(){
        /*........*/ 
    }

    especial(){
        let hit = (this.ataque + 2 );

        enemigo.vida -= hit;
    }
}


//instanciamos a los luchadores 

let f1 = new Fighter("Hormigas",   4, 10, 20, 2);
let f2 = new Fighter("piew",       3, 5, 12, 3);
let f3 = new Fighter("Elon",       2, 7, 15, 2);
let f4 = new Fighter("Greta",      2, 3, 10, 1);
let f5 = new Fighter("Christine",  3, 11, 22, 3);
let f6 = new Fighter("Winnie",     4, 12, 25, 3);
let f7 = new Fighter("Bill",       2, 8, 17, 3);
let f8 = new Fighter("Ameba",      2, 13, 10, 2);
let f9 = new Fighter("Mascarilla", 3, 8, 12, 1);



//traductor
let allplayers = {
    "1": f1,
    "2": f2,
    "3": f3,
    "4": f4,
    "5": f5,
    "6": f6,
    "7": f7,
    "8": f8,
    "9": f9
}

//juego

let juego = {

    turno: 0,
    player1: "",
    player2: "",
    ganador: "",

    resetearLucha(){

    },

    turnoLucha(){

    },
}