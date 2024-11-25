const apiKey = '666ff668c1af8ca548c24fee8d039b5a'; // Replace with your OpenWeatherMap API key

document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city === '') {
    alert('Please enter a city name.');
    return;
  }

  fetchWeather(city);
});

function fetchWeather(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      alert(error.message);
    });
}

function displayWeather(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherCondition = data.weather[0].description;
  const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  document.getElementById('cityName').textContent = cityName;
  document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
  document.getElementById('weatherCondition').textContent = `Condition: ${weatherCondition}`;
  document.getElementById('weatherIcon').src = weatherIcon;
}
