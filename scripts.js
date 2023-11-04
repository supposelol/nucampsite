const apiKey = process.env.OPEN_WEATHER_API_KEY
const city = 'Lubbock'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

//weather JS
async function fetchWeather() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayWeather(data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  
  function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const weatherIcon = document.getElementById('weather-icon');
    const weatherTemp = document.getElementById('weather-temp');
    const weatherDescription = document.getElementById('weather-description');
  
    //city
    cityName.textContent = data.name;
  
    //icon
    const weatherIconPic = document.createElement('img');
    weatherIconPic.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.appendChild(weatherIconPic);
  
    //temperature
    weatherTemp.textContent = `${data.main.temp}\u00B0 F`;
  
    //description
    weatherDescription.textContent = data.weather[0].description;
  }
  
fetchWeather();

//carousel JS
const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
}) 