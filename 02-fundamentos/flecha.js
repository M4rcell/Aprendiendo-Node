/* function sumar(a,b){
 return a+b;
} */

/* let sumar=(a,b)=>{
    return a+b;
   } */

   let sumar=(a,b)=> a+b;
   
   console.log(sumar(34,30));


  /*  function saludar(){
       return 'Hola Mundo';
   } */

   let saludar =()=> 'Hola Mundo';



   console.log(saludar());

   let deadpool ={
    nombre:'Wade',
    apellidos:'Winston',
    poder:'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellidos} - poder: ${this.poder}`
    }
};


console.log(deadpool.getNombre());
