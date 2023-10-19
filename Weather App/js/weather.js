const apiKey = "af0e9de2851d2eb32aed1675c14277bb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const busquedaBox = document.querySelector(".buscador input");
const busquedaBtn = document.querySelector(".buscador button");
const weatherIcon = document.querySelector(".weatherIcon")

async function verClima(ciudad) {
    const response = await fetch(apiUrl + ciudad + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
        let data = await response.json();

    document.querySelector(".ciudad").innerHTML = data.name;
    document.querySelector(".pais").innerHTML = data.sys.country;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humedad").innerHTML = data.main.humidity + "%";
    document.querySelector(".viento").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

busquedaBtn.addEventListener("click", () => {
    verClima(busquedaBox.value);
})