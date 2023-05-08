import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";

const FriendsAdd = () => {

    let push = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                push('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    return(
        <div>
            <h2>ADD FRIENDS</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="friendName">FRIEND NAME</label>
                    <input id="friendName" onChange={handleChange} name="name"/>
                </div>
                <div>
                    <label htmlFor="friendEmail">FRIEND EMAIL</label>
                    <input id="friendEmail" onChange={handleChange} name="email"/>
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    );
  }

  export default FriendsAdd;