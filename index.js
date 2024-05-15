const apiKey = "95f7bd6247628e7b8646b7ea3b957364";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".waether-icon");
const checkweather = async(city) => {
    const response = await fetch(apiUrl  + city + `&appid=${apiKey}`);  
    const data = await response.json();
    console.log(data); 

    if(data.cod === "404"){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        weatherIcon.src= `images/${(data.weather[0].main)}.png`;
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display= "block";
    }

   
    
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})

