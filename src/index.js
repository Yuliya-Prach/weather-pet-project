import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Page = () => {
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
                initialValues = {{city: ''}}
                validationSchema = {schema}
                onSubmit = {value => {
                    console.log(value);
                }}
            >
                {({ errors, touched}) => (
                    <Form>
                        <Field name="city" />
                        {errors.city && touched.city && <div>{errors.city}</div>}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById('root'));

