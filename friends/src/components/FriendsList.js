import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friends from './Friends';

const FriendsList = props => {
   const [friends, setFriends] = useState([]);

   useEffect(() => {
       axiosWithAuth()
       .get('/api/friends')
       .then(res => {
           console.log(res.data)
           setFriends(res.data)
       })
       .catch(err => {
           console.log(err)
       })
   }, [])

   return (
       <div className='friendsList'>
           {friends.map(friend => (
               <Friends
                key={friend.id}
                name={friend.name}
                age={friend.age}
                email={friend.email}
               />
           ))}
       </div>
   )
}

export default FriendsList;