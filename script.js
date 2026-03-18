// Variáveis e seleção de eventos
const apiKey =  "ec93ff529b105c7121ed16e76cedbfda";
const apiCountryUrl = "https://flagcdn.com/16x12/"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

// Funções
const showWeatherData = (city) => {
    console.log(city)
}

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);

})