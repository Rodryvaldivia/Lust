let textChange = document.querySelector(".btext");

const returnHere = ()=> {
    setTimeout(()=>{
        let change = "the world,the people,the tech,the minds";
        resultado = change.split(",");
        textChange.innerHTML = resultado [1];
        setTimeout(()=>{
            textChange.innerHTML = resultado [2];
            setTimeout(()=>{
                textChange.innerHTML = resultado [3];
                setTimeout(() => {
                    textChange.innerHTML = resultado [0];
                    return returnHere();
                }, 2200);
            },2200);
        },2200);
    },2200);
}

returnHere();

