import React from 'react';
import {mount} from 'enzyme';
import {transformTemp} from "./CurrentWeather";
import {CurrentWeather} from "./CurrentWeather";

const testData = {
    name: 'Test',
    main: {
        temp: 286,
        temp_max: 288.32,
        temp_min: 283.7,
        pressure: 1024,
        humidity: 64
    },
    wind: {
        speed: 7
    }
};

const i = "http://openweathermap.org/img/wn/10d@2x.png";

describe('Testing TransformTemperature Function', () => {
    it('Checks if temperature is transformed correctly', ()=> {
        expect(transformTemp(0)).toEqual(-273.1);
        expect(transformTemp(273.15)).toEqual(0);
        expect(transformTemp(296.5)).toEqual(23.4);
    });
});

describe('Testing CurrentWeather Component', () => {
    it('Renders without crushing', () => {
        const component = mount(<CurrentWeather data={testData} icon={i}/>);

        expect(component).toMatchSnapshot();
    });
});


