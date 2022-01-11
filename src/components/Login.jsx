import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();
        // Call Login Function
        console.log("Login");
    };

    return (
        <form onSubmit={login} className="Login">
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

            <input className="LoginButton" type="submit" value="Login" />
            <input
                className="LoginButton"
                type="button"
                value="Register"
                onClick={() => navigate("/questdex")}
            />
        </form>
    );
}
