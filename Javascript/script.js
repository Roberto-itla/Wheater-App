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
});

function ApiCall(city, country) {
  const apiId = `6b0558ab6d882ecc1dfd9fc4c9c6ea00`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=${apiId}`;

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      if (dataJSON.cod === "404") {
        MostrarError("Ciudad no encontrada...");
      } else {
        limpiar();
        MostrarClima(dataJSON);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function CambiarGrados(temp) {
  return parseInt(temp - 273.15);
}

function limpiar() {
  result.innerHTML = "";
}

function MostrarClima(data) {
  const {
    name,
    main: { temp, temp_min, temp_max },
    weather: [arr],
  } = data;

  const grados = CambiarGrados(temp);
  const grados_min = CambiarGrados(temp_min);
  const grados_max = CambiarGrados(temp_max);

  const contenido = document.createElement("div");
  contenido.innerHTML = `
        <div class="contenedor-clima" id="clima" >
          <p>Clima en:${name}</p>
           <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="iconos">
           <h1>${grados}°C</h1>
           <p>Max:${grados_max}°C</p>
           <p>Min:${grados_min}°C</p>
        </div>
         `;
  result.appendChild(contenido);
}

function MostrarError(mensaje) {
  console.log(mensaje);
  const alert = document.createElement("span");
  alert.classList.add("Message-alert");
  alert.innerHTML = mensaje;

  form.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 2000);
}
