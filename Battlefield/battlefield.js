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

peticion.open("GET","battlefield.txt");
peticion.send();

let info = new XMLHttpRequest();

info.addEventListener("click",()=>{
    let respuesta;
    if(peticion.status == 200 || peticion.status == 201) {
        respuesta = peticion.response;
    }
})

info.open("POST","../carrito/battlefield.txt");
info.setRequestHeader("Content-type","application/json;charset=UTF8");
info.send(JSON.stringify({
    "name" : "Battlefield 2042",
    "price" : "59"
}));

