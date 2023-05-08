import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const push = useNavigate();
    const [cred, setCred] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/api/login", cred)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                push('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return(

        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>USERNAME</label>
                    <input id="username" name="username" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='password'>PASSWORD</label>
                    <input id="password" type="password" name="password" onChange={handleChange}/>
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    );
  }

  export default Login;