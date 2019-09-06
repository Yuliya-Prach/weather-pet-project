const apikey = 'd8d1e0479142a0f222b92b77c5d096c1';
const getCurrentWeather = async ({city}) => {
    let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + apikey);
    const json = await response.json();
    return json;
};

export default getCurrentWeather;
