/* 
setTimeout(()=>{
    console.log('Hola Mundo');
},3000);
 */

 let getUsuarioById = (id, callback)=>{

    let usuario={
      nombre:'Marcel',
      id
    }

    if(id===20){
        callback(`El usuario con id ${id} , no  existe en el BD`);
    } else{
        callback(null,usuario);
    }



 }

 getUsuarioById(2,(err,usuario)=>{
     if(err)
     {
         return console.log(err);
     }
  
    console.log('Usuario de Base de Datos', usuario);
 });