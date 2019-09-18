import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {getCurrentWeather, getWeatherIcon} from './Services/DataService';
import {CurrentWeather} from "./Components/CurrentWeather/CurrentWeather";
import Grid from '@material-ui/core/Grid';

const Page = () => {
    const [weather, setWeather] = useState(null);
    const [icon, setIcon] = useState(null);
    let schema = Yup.object().shape({
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
                            setWeather(null);
                            let result = getCurrentWeather(value);
                            result.then((data) => {
                                setWeather(data);
                                console.log(data.weather[0].icon);
                                let icon = getWeatherIcon(data.weather[0].icon);
                                icon.then((image) =>{
                                    let url = URL.createObjectURL(image);
                                    setIcon(url);
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
                                <CurrentWeather data={weather} icon={icon}/>
                        }
                    </div>
                    }
                </Grid>
            </Grid>
        </div>
    );
}

ReactDOM.render(<Page/>, document.getElementById('root'));

