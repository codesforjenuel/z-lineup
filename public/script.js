const modelName = document.querySelector('.inputForm')

let btn = document.querySelector(".btn").addEventListener("click", (event) => {
    event.preventDefault()

    
    fetch('/')
        .then(response => response.json())
        .then((weatherData => {
            console.log(weatherData)
            //these query selectors target the today container elements  
            // 

            document.querySelector(".todaySky").src = weatherData.current.condition.icon;
            document.querySelector(".cityName").textContent = weatherData.location.name;
            document.querySelector(".today").textContent = weatherData.forecast.forecastday[0].date;
            document.querySelector(".temp").textContent = `Temp: ${weatherData.current.temp_f}°F`
            document.querySelector(".wind").textContent = `Wind: ${weatherData.current.wind_mph} mph`
            document.querySelector(".humid").textContent = `Humidity: ${weatherData.current.humidity}`
            document.querySelector(".uv").textContent = `Uv: ${weatherData.current.uv}`
            document.querySelector(".condition").textContent = weatherData.current.condition.text
            //these query selectors target tomorrow's data
            document.querySelector(".tomorrowSky").src = weatherData.forecast.forecastday[1].hour[12].condition.icon
            document.querySelector(".tomorrow").textContent = weatherData.forecast.forecastday[1].date;
            document.querySelector(".temp2").textContent = `Temp: ${weatherData.forecast.forecastday[1].hour[12].temp_f}°F`
            document.querySelector(".wind2").textContent = `Wind: ${weatherData.forecast.forecastday[1].hour[12].wind_mph} mph`
            document.querySelector(".humid2").textContent = `Humidity: ${weatherData.forecast.forecastday[1].hour[12].humidity}`
            document.querySelector(".uv2").textContent = `Uv: ${weatherData.forecast.forecastday[1].hour[12].uv}`
            document.querySelector(".condition2").textContent = weatherData.forecast.forecastday[1].hour[12].condition.text
            //these query selectors target the day after tomorrow's data
            document.querySelector(".dayAfterTomorrowSky").src = weatherData.forecast.forecastday[2].hour[12].condition.icon
            document.querySelector(".dayAfterTomorrow").textContent = weatherData.forecast.forecastday[2].date;
            document.querySelector(".temp3").textContent = `Temp: ${weatherData.forecast.forecastday[2].hour[12].temp_f}°F`
            document.querySelector(".wind3").textContent = `Wind: ${weatherData.forecast.forecastday[2].hour[12].wind_mph} mph`
            document.querySelector(".humid3").textContent = `Humidity: ${weatherData.forecast.forecastday[2].hour[12].humidity}`
            document.querySelector(".uv3").textContent = `Uv: ${weatherData.forecast.forecastday[2].hour[12].uv}`
            document.querySelector(".condition3").textContent = weatherData.forecast.forecastday[2].hour[12].condition.text
            //inputEl is given a value of an empty string to clear the text that was inputed when you click the search button
            inputEl.value = ""
        }))
})