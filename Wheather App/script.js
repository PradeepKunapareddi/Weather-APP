const apiKey = "a05ff8b46d371e4337058ba0f65dd80d"; // Replace with your actual API key

async function checkWeather() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("City not found. Please try again!");
        }

        const data = await response.json();

        // Update weather details in the DOM
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = (data.main.temp - 273.15).toFixed(2) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Update the weather icon dynamically
        document.querySelector(".weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        alert(error.message);
    }
}
