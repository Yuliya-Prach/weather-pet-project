import React from 'react';
import {Box} from "@material-ui/core/index";
import Grid from '@material-ui/core/Grid/index';
import {WeatherPaper} from '../WeatherPaper/WeatherPaper';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
   box: {
       background: "#cfd8dc",
       border: 1,
       borderRadius: 16,
       borderColor: "primary.main"
   }
});

const transformTemp = (temp) => {
    let kelvin = 273.15;
    return Math.round((temp - kelvin) * 10)/10;
};

export const CurrentWeather = (props) => {
    let styles = useStyles();
    let {name, main, wind} = props.data;
    let icon = props.icon;
    return (
            <Box m={3} className={styles.box} p={3}>
                <Grid container spacing={3} justify="space-evenly">
                    <Grid item xs={6} alignItems="center">
                        <h2>{name}</h2>
                    </Grid>
                    <Grid item >
                        <img src={icon}/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <WeatherPaper title="Temperature" value={transformTemp(main.temp)} unit="℃"/>
                    <WeatherPaper title="Max Temperature" value={transformTemp(main.temp_max)} unit="℃" />
                    <WeatherPaper title="Min Temperature" value={transformTemp(main.temp_min)} unit="℃" />
                </Grid>
                <Grid container spacing={3}>
                    <WeatherPaper title="Pressure" value={main.pressure} unit="Pa" />
                    <WeatherPaper title="Humidity" value={main.humidity} unit="%"/>
                    <WeatherPaper title="Wind Speed" value={wind.speed} unit="km/h" />
                </Grid>
            </Box>
    );
};
