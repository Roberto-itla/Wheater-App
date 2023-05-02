const result = document.querySelector("#busca");
const form = document.querySelector("#obtn");
const nameCity = document.querySelector("#city");
const nameCountry = document.querySelector("#country");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameCity.value === "" || nameCountry.value === "") {
    MostrarError("Los campos son obligatorios!");
    return;
  }

  ApiCall(nameCity.value, nameCountry.value);
  // console.log(nameCity.value);
  // console.log(nameCountry.value);
});

function ApiCall (city,country){  
  const apiId = ` 6b0558ab6d882ecc1dfd9fc4c9c6ea00`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`
}

function MostrarError(mensaje){
  console.log(mensaje)
  const alert = document.createElement("p");
  alert.classList.add("Message-alert");
  alert.innerHTML = mensaje;

  form.appendChild(alert);

  setTimeout(() =>{
    alert.remove()
  },3500);
}
