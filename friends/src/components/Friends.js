import React from 'react';

const Friends = props => {
    return (
        <div className='friendCard'>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default Friends;