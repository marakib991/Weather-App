const apiKey="3f93dd0f352ae50afbb5b0ccdf527d5c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=toronto";

const checkWeather = async ()=>{
  const response= await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = data.main.temp;
  document.querySelector('.humidity').innerHTML = data.main.humidity;
  document.querySelector('.wind').innerHTML = data.wind.speed;

}

checkWeather();

