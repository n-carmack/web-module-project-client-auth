import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

const Friendslist = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res);
                setFriends(res.data);
        })
            .catch(err=>{ 
                console.log(err);
        })
    }, []);

    return(
        <div>
            <h2>FRIENDS LIST</h2>
            <ul>
                {
                    friends.map(friend => {
                        return <li key={friend.id}>{friend.name} - {friend.email}</li>
                    })
                }   
            </ul>
        </div>
    );
  }

  export default Friendslist;