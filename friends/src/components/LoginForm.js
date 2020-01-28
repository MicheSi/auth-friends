import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = ({ values, errors, touched, status }) => {
    return (
        <div className='loginForm'>
            <Form>
                <label htmlFor='username'>Username:</label>
                <Field
                 id='username'
                 type='text'
                 name='username'
                />
                <label htmlFor='password'>Password:</label>
                <Field
                 id='password'
                 type='text'
                 name='password'
                />
                <button type='submit'>Log In</button>
            </Form>
        </div>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
    }),
    handleSubmit(values, { setStatus }) {
        console.log('submitting', values);
        axios
        .post('', values)
        .then(res => {
            console.log('success', res);
            setStatus(res.data)
        })
        .catch(err => console.log('error', err.response))
    }
})(LoginForm)

export default FormikLoginForm;