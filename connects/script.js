// Variáveis e seleção de eventos
const apiKey =  "ec93ff529b105c7121ed16e76cedbfda";
const apiCountryUrl = "https://flagcdn.com/16x12/"
const cityKey = "mMX2jf7YTHH0ufeLyBhKLQJxeG9vIq0gtDd2yuNWuxY"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")
const bgImage = document.querySelector("#bg-image")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")
const weatherContainer = document.querySelector("#weather-data")

// Funções
const getWeatherData = async(city) =>{
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherUrl)
    const data = await res.json()

    return data
}

const getCityPhoto = async(city) =>{
    const apiUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${cityKey}`

    const res = await fetch(apiUrl)
    const data = await res.json()

    return data.results[0].urls.regular
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city)
    const photoUrl = await getCityPhoto(city);

    cityElement.innerText = data.name;
    tempElement.innerText = `${parseInt(data.main.temp)}`;
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`)
    bgImage.setAttribute("src", photoUrl);
    humidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed}KM/H`

    weatherContainer.classList.remove("hide")
}

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
})

cityInput.addEventListener("keyup", (e) =>{
    if(e.code === "Enter"){
        const city = e.target.value

        showWeatherData(city)
    }
})