
let deadpool ={
    nombre:'Wade',
    apellidos:'Winston',
    poder:'Regeneracion',
    getNombre:function(){
        return `${this.nombre} ${this.apellidos} - poder: ${this.poder}`
    }
};


console.log(deadpool.getNombre());

/* let nombre =deadpool.nombre;
let apellido = deadpool.apellidos;
let poder    = deadpool.poder;

 */

 let {nombre:primerNombre,apellidos,poder} = deadpool;

 console.log(primerNombre, apellidos,poder);
