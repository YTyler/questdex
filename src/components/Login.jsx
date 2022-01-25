import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../axios/UserApi";

export default function Login(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = (event) => {
        event.preventDefault();
        // Call Login Function
        const user = login(username, password);
        if (user) {
            props.log(true);
            navigate("/");
        }
    };

    return (
        <form onSubmit={loginHandler} className="LoginRegister">
            <input
                type="text"
                value={username}
                onChange={(element) => setUsername(element.target.value)}
                placeholder="Username"
                autoFocus
            />
            <input
                type="password"
                value={password}
                onChange={(element) => setPassword(element.target.value)}
                placeholder="Password"
                autoFocus
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
