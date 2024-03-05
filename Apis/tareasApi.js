const URL_API = "http://localhost:3000";
const myHeaders = new Headers({
    "Content-Type": "application/json"
});

const getTareas = async() => {
    try {
        const respuesta = await fetch(`${URL_API}/tareas`);
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            return datos
        } else if(respuesta.status === 401){
            console.log("La url no es correcta");
        }
         else if(respuesta.status === 404){
            console.log("la tarea no existe");
        } else {
            console.log("error")
        }
    }
    catch (error) {
        console.log(error);
    }

}



const postTarea = async(datos) => {
    fetch(`${URL_API}/tareas`,
    {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(datos)
    })
    .then(res => {return res.json()})
    .catch(err => {console.log(err)})
    
}

const patchTarea = async(datos,id) => {
    fetch(`${URL_API}/tareas/${id}`,
    {
        method: "PATCH",
        headers: myHeaders,
        body: JSON.stringify(datos)
    })
    .then(res => {return res.json()})
    .catch(err => {console.log(err)})
    
}

const deleteTarea =  async () => {
    try{
        return await fetch(`${URL_API}/tareas/${id}`,{
            method: "delete",
            headers: myHeaders
        })
    }
    catch (error){
        console.log('Error en la solicitud delete:',error.message)
    }
}

export{
    getTareas as getTareas,
    postTarea as postTarea,
    patchTarea as patchTarea,
    deleteTarea as deleteTarea
}