const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="1d05ac685724b708d7c29dd11af6f7da";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
async function checkweather(city)
{
	const res=await fetch(apiUrl+city+"&appid="+apikey);
	const d=await res.json();
	console.log(d);
	document.querySelector(".temp").innerHTML=Math.floor(d.main.temp)+"&deg;C";
	document.querySelector(".city").innerHTML=d.name;
	document.querySelector(".humidity").innerHTML=d.main.humidity+"%";
	document.querySelector(".wind").innerHTML=d.wind.speed+" km/h";
	
	document.querySelector(".weather-icon").src="image/"+d.weather[0].description+".png"

}
	//searchBtn.addEventListener("click",checkweather());
	function one()
	{
		var city=document.querySelector(".search input").value;
		checkweather(city);
	}
//alert("h1")