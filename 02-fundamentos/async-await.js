/* 

let getNombre = async()=>{

    //return 'Marcel';
    throw new Error('No existe para ese Usuario');
    //undefined.nombre;
} */

let getNombre=()=>{

    return new Promise((resolve,reject)=>{
         setTimeout(()=>{

             resolve('Fernando');
         },3000)
    })
}

let saludo =async()=>{
    
    let nombre =  await getNombre();

    return `Hola ${nombre}` ;

}


saludo().then(nombre => {

    console.log(nombre);
 
}).catch(e=>{

    console.log("Error : ",e);
});