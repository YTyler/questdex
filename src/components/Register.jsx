import React, {useState} from "react";

export default function Register() {

    const checkRegistration = () => {
        console.log("Register Attempt")
        register();
    }

    const register = () => {
        console.log("Registration Successful")
    }

    return (
        <form onSubmit={checkRegistration}>
            <input type = "text" placeholder="Username"/>
            <input type = "email" placeholder="Email"/>
            <input type = "password" placeholder="Password"/>
            <input type = "password" placeholder="Confirm Password"/>
            <input type = "submit" value="Register" />
        </form>
    );
}