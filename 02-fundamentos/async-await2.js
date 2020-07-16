
let empleados = [{
    id:1,
    nombre:'Marcel'
},
{
    id:2,
    nombre:'Pepe'
},
{
    id:3,
    nombre:'Cameron'
}

];


let salarios=[
{
  id:1,
  salario:1000
},
{
  id:2,
  salario:2000
}

];




let getEmpleado = (id)=>{

    return new Promise((resolve,reject)=>{

        let empleadoDB = empleados.find(empleado=>{
            return empleado.id===id;
        })
    
        if(!empleadoDB){
    
            reject(`No existe un empleado con el ID ${id}`);
    
        }
        else{
            
            resolve(empleadoDB);
    
        }

    });
  
}


let getSalario=(empleado)=>{

    return new Promise((resolve,reject)=>{

        let salarioDB = salarios.find(salario=>{
            return salario.id===empleado.id;
        })
        
        if (!salarioDB) {
    
            reject(`No se encontro salario para el usuario ${empleado.nombre}`);
        }
        else{
            
            resolve({
                nombre:empleado.nombre,
                salario:salarioDB.salario,
                id: empleado.id
            });
    
        }
    });


}



let getInformacion  =  async (id) => {

    let empleado =await getEmpleado(id)

    let resp = getSalario(empleados);

    console.log(empleado);
}


getInformacion(1);
