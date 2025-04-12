let cityName = document.querySelector(".weather_city")
let w_icon = document.querySelector(".weather_icon")
let w_temperature = document.querySelector(".weather_temperature")
let dateTime = document.querySelector(".weather_date_time")
let w_forecast = document.querySelector(".weather_forecast")
let w_min = document.querySelector(".weather_min")
let w_max = document.querySelector(".weather_max")

let w_feelsLike = document.querySelector(".weather_feelsLike")
let w_humidity = document.querySelector(".weather_humidity")
let w_wind = document.querySelector(".weather_wind")
let w_pressure = document.querySelector(".weather_pressure")

let citySearch=document.querySelector(".weather_search")
// b3ae73f5a754be51d150487fa528e7fe

// to get the actual country name

const getCountryName = (code) => {
    return new Intl.DisplayNames([code], { type: "region" }).of(code);
}

// to get the date and time

const getDateTime = (dt) => {
    // let dt = 1708667988;
    const curDate = new Date(dt * 1000); // Convert seconds to milliseconds
    console.log(curDate);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        //   second: "numeric",
    };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    console.log(formatter);
    const formattedDate = formatter.format(curDate);

    return formattedDate;

    // let num = 3232.552;
    // console.log(num.toFixed());
    // console.log(Math.round(num));
}

let city="pune"

// search city country temperature

citySearch.addEventListener("submit",(e)=>{
    e.preventDefault()
    let cityName = document.querySelector(".city_name")
    console.log(cityName.value)
    city=cityName.value
    getWeatherData();
    cityName.value=""
    
})


const getWeatherData = async () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b3ae73f5a754be51d150487fa528e7fe`;
    try {
        const res = await fetch(weatherUrl)
        const data = await res.json();
        console.log(data)

        const { main, name, weather, wind, sys, dt } = data



        cityName.innerHTML = `${name},${getCountryName(sys.country)}`;
        dateTime.innerHTML = getDateTime(dt)


      w_forecast.innerHTML=weather[0].main
      w_icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png"/>`


        w_temperature.innerHTML = `${main.temp}&#176`;
        w_min.innerHTML = `Min:${main.temp_min.toFixed()}&#176`
        w_max.innerHTML = `Max:${main.temp_max.toFixed()}&#176`
        w_humidity.innerHTML = `${main.humidity}%`
        w_wind.innerHTML = `${wind.speed} m/s`
        w_pressure.innerHTML = `${main.pressure} hPa`
        w_feelsLike.innerHTML = `${main.feelsLike.toFixed(2)}&#176`



    }
    catch (error) {
        console.log(error)
    }
}

document.body.addEventListener("load", getWeatherData())

