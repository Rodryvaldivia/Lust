let peticion = new XMLHttpRequest();

peticion.addEventListener("load",()=>{
    let respuesta;
    if(peticion.status == 200 || peticion.status == 201) {
        respuesta = peticion.response;
    }
    console.log(JSON.parse(respuesta));
})

peticion.open("GET","battlefield.txt");
peticion.send();