if(window.XMLHttpRequest){
    peticion = new XMLHttpRequest();
} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP")
}

peticion.addEventListener("load",()=>{
    let respuesta;
    if(peticion.status == 200 || peticion.status == 201) {
        respuesta = peticion.response;
    }
    document.querySelector(".h1game").innerHTML = JSON.parse(respuesta).nombre;
    document.querySelector(".infogame").innerHTML = JSON.parse(respuesta).info;
    document.querySelector(".fechagame").innerHTML = JSON.parse(respuesta).fecha;
    document.querySelector(".preciogame").innerHTML = JSON.parse(respuesta).precio;
});

peticion.open("GET","gow.txt");
peticion.send();