const APIkey = '67a28b7d70bad2bf8a9a28e4b129175f';
let data = [];
const buttonMelbourne = document.getElementById('buttonMelbourne');
const buttonTokyo = document.getElementById('buttonTokyo');
const buttonSingapore = document.getElementById('buttonSingapore');
const buttonBandung = document.getElementById('buttonBandung');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const picOne = document.querySelector('.one .pic');
const picTwo = document.querySelector('.two .pic');
const picThree = document.querySelector('.three .pic');
const picFour = document.querySelector('.four .pic');

async function getWeatherMelbourne() {
    let a = await fetch(`http://api.weatherstack.com/current?access_key=${APIkey}&query=Melbourne`);
    let b = await a.json();
    data.push(b);

    picOne.innerHTML = '';//Since this element is already in weather.html, we can simply make it empty. However...
    if(one.children[1]) one.removeChild(one.children[1]);//children[0] is the pic and [1] is the div, which we created below. Because we created this div element, we need to remove it, not just set it to empty. Otherwise there will be many empty divs

    let img = document.createElement('img'); //Create element
    let pic = data[0].current.weather_icons[0]; //The url for the pic
    img.src = pic; //Assign the url to img.src
    picOne.append(img)//Then finally append

    let div = document.createElement('div');
    let temperatureString = `Current temperature for ${data[0].request.query} is ${data[0].current.temperature}, ${data[0].current.weather_descriptions[0]}`;
    let humidityString = `Current humidity is ${data[0].current.humidity} and wind speed is ${data[0].current.wind_speed}`;
    let uvString = `Local time is ${data[0].location.localtime}`;
    div.innerHTML = `${temperatureString}<br><br>${humidityString}<br><br>${uvString}`;
    one.insertAdjacentHTML('beforeend', div.outerHTML);//beforeend refers to inside the element(one), and after the last child(pic). outerHTML includes the div itself, not just the temperatureString, humidityString, etc.

    data = [];
}

async function getWeatherTokyo() {
    let a = await fetch(`http://api.weatherstack.com/current?access_key=${APIkey}&query=Tokyo`);
    let b = await a.json();
    data.push(b);

    picTwo.innerHTML = '';
    if(two.children[1]) two.removeChild(two.children[1]);

    let img = document.createElement('img'); 
    let pic = data[0].current.weather_icons[0]; 
    img.src = pic; 
    picTwo.append(img)

    let div = document.createElement('div');
    let temperatureString = `Current temperature for ${data[0].request.query} is ${data[0].current.temperature}, ${data[0].current.weather_descriptions[0]}`;
    let humidityString = `Current humidity is ${data[0].current.humidity} and wind speed is ${data[0].current.wind_speed}`;
    let uvString = `Local time is ${data[0].location.localtime}`;
    div.innerHTML = `${temperatureString}<br><br>${humidityString}<br><br>${uvString}`;
    two.insertAdjacentHTML('beforeend', div.outerHTML);

    data = [];
}

async function getWeatherSingapore() {
    let a = await fetch(`http://api.weatherstack.com/current?access_key=${APIkey}&query=Singapore`);
    let b = await a.json();
    data.push(b);

    picThree.innerHTML = '';
    if(three.children[1]) three.removeChild(three.children[1]);

    let img = document.createElement('img'); 
    let pic = data[0].current.weather_icons[0]; 
    img.src = pic; 
    picThree.append(img)

    let div = document.createElement('div');
    let temperatureString = `Current temperature for ${data[0].request.query} is ${data[0].current.temperature}, ${data[0].current.weather_descriptions[0]}`;
    let humidityString = `Current humidity is ${data[0].current.humidity} and wind speed is ${data[0].current.wind_speed}`;
    let uvString = `Local time is ${data[0].location.localtime}`;
    div.innerHTML = `${temperatureString}<br><br>${humidityString}<br><br>${uvString}`;
    three.insertAdjacentHTML('beforeend', div.outerHTML);

    data = [];
}

async function getWeatherBandung() {
    let a = await fetch(`http://api.weatherstack.com/current?access_key=${APIkey}&query=Bandung`);
    let b = await a.json();
    data.push(b);

    picFour.innerHTML = '';
    if(four.children[1]) four.removeChild(four.children[1]);

    let img = document.createElement('img'); 
    let pic = data[0].current.weather_icons[0]; 
    img.src = pic; 
    picFour.append(img)

    let div = document.createElement('div');
    let temperatureString = `Current temperature for ${data[0].request.query} is ${data[0].current.temperature}, ${data[0].current.weather_descriptions[0]}`;
    let humidityString = `Current humidity is ${data[0].current.humidity} and wind speed is ${data[0].current.wind_speed}`;
    let uvString = `Local time is ${data[0].location.localtime}`;
    div.innerHTML = `${temperatureString}<br><br>${humidityString}<br><br>${uvString}`;
    four.insertAdjacentHTML('beforeend', div.outerHTML);

    data = [];
}

buttonMelbourne.addEventListener('click', getWeatherMelbourne);
buttonTokyo.addEventListener('click', getWeatherTokyo);
buttonSingapore.addEventListener('click', getWeatherSingapore);
buttonBandung.addEventListener('click', getWeatherBandung);