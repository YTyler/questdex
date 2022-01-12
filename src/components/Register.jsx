import React, { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [validUsername, setValidUsername] = useState();

    const usernameHandler = (input) => {
        setUsername(input);
        if (input.includes(" ")) {
            setValidUsername(false);
        } else {
            if (input.length >= 4 && input.length < 15) {
                setValidUsername(true);
            } else {
                setValidUsername(false);
            }
        }
    };

    const checkRegistration = (event) => {
        event.preventDefault();
        console.log("Register Attempt");
        register();
    };

    const register = () => {
        console.log("Registration Successful");
    };

    return (
        <form onSubmit={checkRegistration} className="LoginRegister">
            <input
                type="text"
                value={username}
                onChange={(elem) => usernameHandler(elem.target.value)}
                placeholder="Username"
            />
            <input
                type="email"
                value={email}
                onChange={(elem) => setEmail(elem.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(elem) => setPassword(elem.target.value)}
                placeholder="Password"
            />
            <input
                type="password"
                value={confirmPassword}
                onChange={(elem) => setConfirmPassword(elem.target.value)}
                placeholder="Confirm Password"
            />

            {/* Register information below */}
            <p className={validUsername ? "Valid" : "Invalid"}>
                Username must be at least 4 characters and less than 15
                characters long
            </p>
            <p>Email must be valid</p>
            <p>Password must be at least 8 characters long</p>
            <p>Both the Password and the Confirmation Password must match</p>

            <input
                type="submit"
                className="LoginRegisterButton"
                value="Register"
            />
        </form>
    );
}
