//creamos la estructura básica de personajes y juego.

//clase luchador, con sus propiedades y métodos.

class Fighter {
  constructor(name, virus, inmunidad, dislikes, likes, troleo, 
    superpoblacion, hackeo, marketing, indigestion) {

        this.name = name;
        this.virus = virus;
        this.inmunidad = inmunidad;
        this.dislikes = dislikes;
        this.likes = likes;
        this.troleo = troleo;
        this.superpoblacion = superpoblacion;
        this.hackeo = hackeo;
        this.marketing = marketing;
        this.indigestion = indigestion;
        this.cordura = 100;

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

    defenderse(){

        

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

let f1 = new Fighter("ants",           25, 40, 7, 2, 1, 3, 0, 2);
let f2 = new Fighter("Kpiewdiepie",    30, 35, 2, 15, 3, 2, 9, 4);
let f3 = new Fighter("tesla",          35, 30, 1, 13, 3, 2, 8, 3);
let f4 = new Fighter("Greta-Thunberg", 15, 25, 4, 7, 2, 1, 6, 8);
let f5 = new Fighter("fmi",            35, 30, 7, 2, 6, 2, 3, 0);
let f6 = new Fighter("winnie",         40, 20, 3, 10, 6, 3, 9, 2);
let f7 = new Fighter("bill-gates",     30, 35, 5, 3, 5, 1, 6, 0);
let f8 = new Fighter("ameba",          10, 45, 6, 5, 0, 3, 2, 0);
let f9 = new Fighter("bolsa",           5, 80, 3, 7, 6, 3, 7, 8, 3);


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