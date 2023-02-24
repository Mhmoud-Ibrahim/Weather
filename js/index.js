
let searchInput = document.getElementById('search');
let Wlocation = [];
let temprature =[];
let weathertext = [];
let weatherforcastIcon=[];
let weatherforcasttext = [];
let weatherIcon = [];
let winddirection = [];
let tomorrowforcast =[];
let tomorrowforcast2 = [];
let tomorrowforcast3 =[];
let tomorrowforcast23min =[];
async function getWeather(weatherCountry){
let apiResponse =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${weatherCountry}&days=5`)
let Wresult =await apiResponse.json();
Wlocation=Wresult.location.name
temprature =Wresult.current.temp_c
weathertext= Wresult.current.condition.text
weatherIcon = Wresult.current.condition.icon
weatherforcasttext =Wresult.forecast.forecastday[0].day.condition.text
weatherforcastIcon =Wresult.forecast.forecastday[0].day.condition.icon
tomorrowforcast =Wresult.forecast.forecastday[1].day.maxtemp_c
tomorrowforcast2 =Wresult.forecast.forecastday[1].day.mintemp_c
tomorrowforcast3 =Wresult.forecast.forecastday[2].day.maxtemp_c
tomorrowforcast23min =Wresult.forecast.forecastday[2].day.mintemp_c
getWeatherDate()
}
function displayWeather(){
    document.getElementById('location').innerHTML = Wlocation
    document.getElementById('temp').innerHTML = temprature +"<sup>o</sup>C"
    document.getElementById('text').innerHTML = weathertext
    document.getElementById('custom').innerHTML = weatherforcasttext
    document.getElementById('custom2').innerHTML = weatherforcasttext
    document.querySelector('.forecast-icon img').setAttribute('src',`${weatherIcon}`)
    document.querySelector('#forcasticon1').setAttribute('src',`${weatherforcastIcon}`)
    document.querySelector('#forcasticon2').setAttribute('src',`${weatherforcastIcon}`)
    document.getElementById('forcast1').innerHTML = tomorrowforcast+"<sup>o</sup>C"
    document.getElementById('forcast2').innerHTML = tomorrowforcast3+"<sup>o</sup>C"
    document.getElementById('max1').innerHTML = tomorrowforcast2+'<sup>o</sup>'
    document.getElementById('max').innerHTML = tomorrowforcast23min+'<sup>o</sup>'
    
}

searchInput.addEventListener('input',function(){
    displayWeather()
    getWeather(searchInput.value)
})

function getWeatherDate(){
    let today = new Date();
    var day = today.getDay();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let monthes = ['January','February','March','April','May','July','Jone','Ogust','Septemper','October','November','december']
   
    for(i=0;i<days.length;i++){
        var dayname = days[day];
        var tomorrow = days[day+1]
        var aftertomorrow = days[0]
        var datemonth ='24'+monthes[day-4] 
        if(days.length>6){
            days.length=0
        }
    }
    document.getElementById('theday').innerHTML= dayname
    document.getElementById('day2').innerHTML= tomorrow
    document.getElementById('day3').innerHTML= aftertomorrow
    document.getElementById('month').innerHTML = datemonth
}
