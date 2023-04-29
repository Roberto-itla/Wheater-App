const result = document.querySelector("#busca");
const form = document.querySelector("#obtn");
const nameCity = document.querySelector("#city");
const nameCountry = document.querySelector("#country");

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    console.log(nameCity.value);
    console.log(nameCountry.value)
});

