import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import getCurrentWeather from './Services/DataService';

const Page = () => {
    const [weather, changeWeather] = useState(null);
    let schema = Yup.object().shape({
        city: Yup.string()
            .required()
            .min(2, 'Too short')
            .trim()
    });

    return (
        <div>
            <h1>Find weather</h1>
            <Formik
                initialValues={{city: ''}}
                validationSchema={schema}
                onSubmit={value => {
                    let result = getCurrentWeather(value);
                    result.then((data) => {
                        console.log(data);
                        changeWeather(data);
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
            {weather &&
                <div>
                    {weather.cod == 404 &&
                        <h2>No such city or weather data is unavailable</h2>
                    }
                </div>
            }
        </div>
    );
}

ReactDOM.render(<Page/>, document.getElementById('root'));

