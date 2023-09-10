const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
      method: 'GET',
      headers: {
            'X-RapidAPI-Key': 'your api key',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
};

const getWeather = (city) => {
      cityname.innerText = city
      fetch(url + city, options)
            .then(response => response.json())
            .then(response => {
                  humidity.innerHTML = response.humidity
                  max_temp.innerHTML = response.max_temp + '&#8451;'
                  min_temp.innerHTML = response.min_temp + '&#8451;'
                  sunrise.innerHTML = response.sunrise
                  sunset.innerHTML = response.sunset
                  temp.innerHTML = response.temp
                  wind_degrees.innerHTML = response.wind_degrees + '&deg;'
                  wind_speed.innerHTML = response.wind_speed + 'm/sec'
            })
            .catch(err => console.log(err));
}

submit.addEventListener("click", (e) => {
      e.preventDefault()
      getWeather(city.value)
})

getWeather('Delhi');
// weather for lucknow
fetch(url + 'lucknow', options)
      .then(response => response.json())
      .then(response => {
            lucknow1.innerHTML = response.temp + '&#8451;'
            lucknow2.innerHTML = response.humidity
            lucknow3.innerHTML = response.max_temp + '&#8451;'
            lucknow4.innerHTML = response.min_temp + '&#8451;'
            lucknow5.innerHTML = response.sunrise
            lucknow6.innerHTML = response.sunset
            lucknow7.innerHTML = response.wind_degrees + '&deg;'
            lucknow8.innerHTML = response.wind_speed + 'm/sec'
      })
      .catch(err => console.log(err));
      // weather for jaipur
fetch(url + 'jaipur', options)
      .then(response => response.json())
      .then(response => {
            jaipur1.innerHTML = response.temp + '&#8451;'
            jaipur2.innerHTML = response.humidity
            jaipur3.innerHTML = response.max_temp + '&#8451;'
            jaipur4.innerHTML = response.min_temp + '&#8451;'
            jaipur5.innerHTML = response.sunrise
            jaipur6.innerHTML = response.sunset
            jaipur7.innerHTML = response.wind_degrees + '&deg;'
            jaipur8.innerHTML = response.wind_speed + 'm/sec'
      })
      .catch(err => console.log(err));
      // weather for indore
fetch(url + 'indore', options)
      .then(response => response.json())
      .then(response => {
            indore1.innerHTML = response.temp + '&#8451;'
            indore2.innerHTML = response.humidity
            indore3.innerHTML = response.max_temp + '&#8451;'
            indore4.innerHTML = response.min_temp + '&#8451;'
            indore5.innerHTML = response.sunrise
            indore6.innerHTML = response.sunset
            indore7.innerHTML = response.wind_degrees + '&deg;'
            indore8.innerHTML = response.wind_speed + 'm/sec'
      })
      .catch(err => console.log(err));
      // weather for mumbai
fetch(url + 'mumbai', options)
      .then(response => response.json())
      .then(response => {
            mumbai1.innerHTML = response.temp + '&#8451;'
            mumbai2.innerHTML = response.humidity
            mumbai3.innerHTML = response.max_temp + '&#8451;'
            mumbai4.innerHTML = response.min_temp + '&#8451;'
            mumbai5.innerHTML = response.sunrise
            mumbai6.innerHTML = response.sunset
            mumbai7.innerHTML = response.wind_degrees + '&deg;'
            mumbai8.innerHTML = response.wind_speed + 'm/sec'
      })
      .catch(err => console.log(err));
      // weather for pune
fetch(url + 'pune', options)
      .then(response => response.json())
      .then(response => {
            pune1.innerHTML = response.temp + '&#8451;'
            pune2.innerHTML = response.humidity
            pune3.innerHTML = response.max_temp + '&#8451;'
            pune4.innerHTML = response.min_temp + '&#8451;'
            pune5.innerHTML = response.sunrise
            pune6.innerHTML = response.sunset
            pune7.innerHTML = response.wind_degrees + '&deg;'
            pune8.innerHTML = response.wind_speed + 'm/sec'
      })
      .catch(err => console.log(err));