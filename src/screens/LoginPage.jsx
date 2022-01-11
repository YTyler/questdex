import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

export default function LoginPage() {

    const [isLoggingIn, setIsLoggingIn] = useState(true);

    const registerHandler = (element) => {
        setIsLoggingIn(element);
    }

    return (
        <>
            <div className = "Navbar">
                <h1>{isLoggingIn ? "Login" : "Register"}</h1>
            </div>
            {isLoggingIn ? <Login registerHandler = {registerHandler} /> : <Register />}
        </>
    );
}