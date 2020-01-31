import React from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth';


class AddFriendForm extends React.Component {
    state = {
        friend: {
            id: Date.now(),
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', this.state.friend)
        .then(res => {
            console.log('success', res);
            localStorage.setItem('friend', res.data.payload);
            this.props.history.push('/friends')
        })
        .catch(err => console.log('error', err))
    };

    render() {
        return (
            <div className='friendForm'>
            <form onSubmit={this.addFriend}>
                <label htmlFor='name'>Name: </label>
                <input
                 id='name'
                 type='text'
                 name='name'
                 value={this.state.friend.name}
                 onChange={this.handleChange}
                />
                <label htmlFor='age'>Age: </label>
                <input
                 id='age'
                 type='number'
                 name='age'
                 value={this.state.friend.age}
                 onChange={this.handleChange}
                />
                <label htmlFor='email'>Email: </label>
                <input
                 id='email'
                 type='email'
                 name='email'
                 value={this.state.friend.email}
                 onChange={this.handleChange}
                />
                
                <button className='addFriend' type='submit'>Add New Friend</button>
            </form>
        </div>
        )

    }
}    


export default AddFriendForm;