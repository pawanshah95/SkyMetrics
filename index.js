function getWeatherData() {
    const citySelect = document.getElementById('citySelect');
    const selectedOption = citySelect.options[citySelect.selectedIndex];
    const { lat, lon } = JSON.parse(selectedOption.value);
    const apiKey = '4b2da424518c3a96129c7a7fc7a98115';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    console.log(apiUrl);
}

document.getElementById('getWeather').addEventListener('click', getWeatherData);