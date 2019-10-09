import React from "react";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import {Field, Form, Formik} from "formik";
import { connect } from 'react-redux';
import {getCurrentWeather, getWeatherIcon} from "../Services/DataService";
import {CurrentWeather} from "../Components/CurrentWeather/CurrentWeather";
import {setWeather, setIcon} from "../Actions";

const MainPage = ({dispatch, ...props}) => {
    const schema = Yup.object().shape({
        city: Yup.string()
            .required()
            .min(2, 'Too short')
            .trim()
    });

    return (
        <div>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <h1>Find weather</h1>
                    <Formik
                        initialValues={{city: ''}}
                        validationSchema={schema}
                        onSubmit={value => {
                            let result = getCurrentWeather(value);
                            result.then((data) => {
                                dispatch(setWeather(data));
                                let icon = getWeatherIcon(data.weather[0].icon);
                                icon.then((image) =>{
                                    let url = URL.createObjectURL(image);
                                    dispatch(setIcon(url));
                                });
                            });
                        }}
                    >
                        {({errors, touched}) => (
                            <Form>
                                <Field name="city"/>
                                {errors.city && touched.city && <div>{errors.city}</div>}

                                <button type="submit">Submit</button>
                            </Form>
                        )}
                    </Formik>
                </Grid>
                <Grid item>
                    {weather &&
                    <div>
                        {
                            weather.cod == 404 ?
                                <h2>No such city or weather data is unavailable</h2>
                                :
                                <CurrentWeather/>
                        }
                    </div>
                    }
                </Grid>
            </Grid>
        </div>
    );
};

export default connect(store => {
    return {
        weather: store.weather,
    };
})(MainPage);
