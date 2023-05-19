const API_KEY = "5a488be1a15e4c69b4a100540231805"

let searchCity = "London"

function getWeather(searchCity) {

    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchCity}&aqi=no`)
        .then(x => x.json())
        .then((x) => {
            if (x.status === 404) {
                console.log("NOt Found");
            }
            return renderWeather(x);
        })
}

const container = document.querySelector(".container")
const searchBar = document.querySelector(".search-bar")
const search = document.querySelector(".search")
searchBar.addEventListener("keyup", (e) => {
    searchCity = e.target.value.trim()
})

search.addEventListener("click", () => {
    getWeather(searchCity)
})

function renderWeather(weather) {
    const name = weather.location.name
    const country = weather.location.country
    const localTime = weather.location.localtime
    const temperature = weather.current.temp_c
    const icon = weather.current.condition.icon
    const windSpeed = weather.current.wind_kph
    const humidity = weather.current.humidity
    const feelsLike = weather.current.feelslike_c
    const uvIndex = weather.current.uv

    if (container.childElementCount == 9) {
        container.innerHTML = ""
    }

    const nameSpan = document.createElement("span")
    nameSpan.innerText = `${name}`
    nameSpan.className="name"

    const countrySpan = document.createElement("span")
    countrySpan.innerText = `${country}`
    countrySpan.className="country"

    const temperatureSpan = document.createElement("span")
    temperatureSpan.innerText = `${temperature} °C`
    temperatureSpan.className="temperature"

    const icons = document.createElement("img")
    icons.className = "myIcon"
    icons.src = "https:" + icon

    const localTimeSpan = document.createElement("span")
    localTimeSpan.innerText = `${localTime.slice(10)}`
    localTimeSpan.className="time"

    const windspeedSpan = document.createElement("span")
    windspeedSpan.innerText = `Wind_kph: ${windSpeed} km/h`
    windspeedSpan.className="speed"

    const humiditySpan = document.createElement("span")
    humiditySpan.innerText = `Humidity: ${humidity} %`
    humiditySpan.className="humidity"

    const feelslikeSpan = document.createElement("span")
    feelslikeSpan.innerText = `Feelslike: ${feelsLike} °C`
    feelslikeSpan.className="feels"

    const uvindexSpan = document.createElement("span")
    uvindexSpan.innerText = `Uv: ${uvIndex}`
    uvindexSpan.className="index"


    container.appendChild(nameSpan)
    container.appendChild(countrySpan)
    container.appendChild(temperatureSpan)
    container.appendChild(icons)
    container.appendChild(localTimeSpan)
    container.appendChild(windspeedSpan)
    container.appendChild(humiditySpan)
    container.appendChild(feelslikeSpan)
    container.appendChild(uvindexSpan)

}

getWeather(searchCity)
