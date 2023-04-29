const result = document.querySelector("#busca");
const form = document.querySelector("#obtn");
const nameCity = document.querySelector("#city");
const nameCountry = document.querySelector("#country");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(nameCity.value === "" || nameCountry.value === "" ){
        mostrarError("Los campos son obligatorios!");
    }
    // console.log(nameCity.value);
    // console.log(nameCountry.value);
});

function mostrarError(mensaje){
    console.log(mensaje);
}