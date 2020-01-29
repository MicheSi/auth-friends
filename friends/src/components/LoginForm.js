import React from 'react';

import axios from 'axios';


class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log('success', res);
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friends')
        })
        .catch(err => console.log('error', err))
    };

    render() {
        return (
            <div className='loginForm'>
            <form onSubmit={this.login}>
                <label htmlFor='username'>Username:</label>
                <input
                 required
                 id='username'
                 type='text'
                 name='username'
                 value={this.state.credentials.username}
                 onChange={this.handleChange}
                />
                
                <label htmlFor='password'>Password:</label>
                <input
                 required
                 id='password'
                 type='text'
                 name='password'
                 value={this.state.credentials.password}
                 onChange={this.handleChange}
                />
                
                <button type='submit'>Log In</button>
            </form>
        </div>
        )

    }
}    


export default LoginForm;