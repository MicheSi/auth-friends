import React, { useState, useEffect } from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = ({ props, values, errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        console.log('status has changed', status);
        status && setUser(user => [...user, status]);
    }, [status])

    return (
        <div className='loginForm'>
            <Form>
                <label htmlFor='username'>Username:</label>
                <Field
                 id='username'
                 type='text'
                 name='username'
                />
                {touched.username && errors.username && (
                     <p className='errors'>{errors.username}</p>
                )}
                <label htmlFor='password'>Password:</label>
                <Field
                 id='password'
                 type='text'
                 name='password'
                />
                {touched.password && errors.password && (
                     <p className='errors'>{errors.password}</p>
                )}
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
    handleSubmit(values, props) {
        console.log('submitting', values);
        axios
        .post('http://localhost:5000/api/login', values)
        .then(res => {
            console.log('success', res);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friendslist')
        })
        .catch(err => console.log('error', err))
    }
})(LoginForm)

export default FormikLoginForm;