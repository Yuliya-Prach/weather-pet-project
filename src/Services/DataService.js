const apikey = 'd8d1e0479142a0f222b92b77c5d096c1';
export const getCurrentWeather = async ({city}) => {
    const response = await fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&APPID=' +
        apikey
    );
    const json = await response.json();
    return json;
};

export const getWeatherIcon = async (code) => {
    const response = await fetch(
        'http://openweathermap.org/img/wn/'+ code +'@2x.png'
    );
    const image = await response.blob();
    return image;
};
