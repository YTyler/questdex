import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios/axiosConfig";

export default function Login(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Axios function to log in a user
    const loginHandler = async (event) => {
        event.preventDefault();
        const response = await axios.post(
            "/user/login",
            {},
            {
                params: {
                    username,
                    password,
                },
            }
        );
        if (response.data) {
            props.log(true);
            props.user(response.data);
            navigate("/questdex");
        }
    };

    return (
        <form onSubmit={loginHandler} className="LoginRegister">
            <input
                type="text"
                value={username}
                onChange={(element) => setUsername(element.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(element) => setPassword(element.target.value)}
                placeholder="Password"
            />

            <input
                className="LoginRegisterButton"
                type="submit"
                value="Login"
            />
            <input
                className="LoginRegisterButton"
                type="button"
                value="Register"
                onClick={() => props.registerHandler(false)}
            />
        </form>
    );
}
