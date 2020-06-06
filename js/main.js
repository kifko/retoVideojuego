
let partida = {

  //propiedades
  equipo1: [],
  equipo2: [],


  //métodos

  escoge1(idLuchador){
      //player 1 selección de personajes.

      /*introducimos los luchadores escogidos en su array correspondiente.
        usamos el diccionario-traductor allplayers con la idLuchador como referencia para 
        direccionar a la clase instanciada*/
      if (this.equipo1.length >= 2){
        this.escoge1 = false;
      }

      this.equipo1.push(allplayers[idLuchador]);

      //comprobamos el array del primero equipo por consola.
      console.log(this.equipo1);
  },

  escoge2(idLuchador){
    
    if (this.equipo2.length >=2){
      this.escoge2 = false;
    }

    this.equipo2.push(allplayers[idLuchador]);
      //repetiremos la operación del primer equipo, en este caso hemos de averiguar como 
      //hacerlo para no poder escoger luchadores repetidos. 
  },


}
