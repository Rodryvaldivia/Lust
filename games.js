class Game {
    constructor(name,price) {
    this.name = name;
    this.price = price;
    this.info = `Juego: ${this.name}, Precio: ${this.price}`
    }
}

const battlefield = new Game ("Battlefield 2042",59.99);
const forzahorizon = new Game ("Forza Horizon 5",49.99);
const haloinfinite = new Game ("Halo Infinite",39.99);
const godofwar = new Game ("Battlefield 2042",59.99);
const doom = new Game ("Doom",9.99);
const minecraft = new Game ("Minecraft",24.99);
const horizon = new Game ("Horizon Zero Dawn",29.99);
const reddead = new Game ("Red Dead Redemption 2",59.99);
const codv = new Game ("Call of duty: Vanguard",59.99);

let peticion = new XMLHttpRequest;

peticion.addEventListener("load",()=>{
    let respuesta = [];
    if(peticion.status == 200 || peticion.status == 201) {
        respuesta = peticion.response;
    } console.log(respuesta)
})

peticion.open("GET","hola.txt");
peticion.send();

let marketButton = document.querySelector(".marketbutton");
let carrito = [];

marketButton.addEventListener("click",()=>{
    carrito.push(battlefield);
    marketButton.style.background = "#ff5623";
    marketButton.setAttribute("value","Añadido al carrito");
    marketButton.style.border = "transparent";
    console.log(carrito)
});

