import React, { useState } from "react";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();
        console.log("Login");
    }

    return (
        <div className = "Login">
            <form onSubmit = {login}>
                <label htmlFor = "username">Username</label>
                <input type = "text" id = "username" value = {username} onChange = {(element) => setUsername(element.target.value)} placeholder = "Username..."/>

                <label htmlFor = "password">Password</label>
                <input type = "password" id = "password" value = {password} onChange = {(element) => setPassword(element.target.value)} placeholder = "Password..."/>

                <input type = "submit" value = "Submit"/>
            </form>
        </div>
    );
}