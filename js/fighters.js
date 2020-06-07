//creamos la estructura básica de personajes y juego.

//clase luchador, con sus propiedades y métodos.



class Fighter {
  constructor(nombre, atacar, defender, fuerza, agilidad, magia, vida) {

        this.nombre = nombre;
        this.atacar = atacar;
        this.defender = defender;
        this.fuerza = fuerza;
        this.agilidad = agilidad;
        this.magia = magia;
        this.vida = 100;
    }

    atacar(enemigo){

        /*En este caso tenemos la referencia de una lógica muy básica para programar el ataque.
         Declaramos una variable luck que será igual al resultado que nos devuelve una función random 
        que tenemos en el archivo utiles.js, los parámetros que devuelve esta función tienen un mínimo de 1
        y un máximo de la suerte del enmigo
        */

        let luck = funciones.random(1, enemigo.marketing);

        /*A continuación, depositamos en la variable hit, el resultado de primero restarle la defensa 
        del enemigo al luchador que emite el golpe, y posteriormente multiplicarlo por la variable luck
        obtenida antes.*/

        let hit = (this.virus - enemigo.hackeo) * luck;


        /*finalmente , restamos a la vida del enemigo el valor establecido en el golpe (hit)*/
        enemigo.cordura -= hit;
    }

    defender(){

        

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

let f1 = new Fighter("ants",           4, 10, 20, 2, 2);
let f2 = new Fighter("Kpiewdiepie",    3, 5, 12, 3, 3);
let f3 = new Fighter("tesla",          2, 7, 15, 2, 2);
let f4 = new Fighter("Greta-Thunberg", 2, 3, 10, 1, 2);
let f5 = new Fighter("fmi",            3, 11, 22, 3, 3);
let f6 = new Fighter("winnie",         4, 12, 3, 3, 4);
let f7 = new Fighter("bill-gates",     2, 8, 17, 3, 2);
let f8 = new Fighter("ameba",          2, 13, 10, 2, 5);
let f9 = new Fighter("mascarilla",     3, 8, 12, 1, 1);



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