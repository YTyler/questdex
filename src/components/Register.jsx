import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios/axiosConfig";

export default function Register(props) {
    // Navigate back to home page
    const navigate = useNavigate();

    // Input field states
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Validation states for each input
    const [validUsername, setValidUsername] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    // Sets state of username and checks if username is sufficient
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

    // Sets state of email and checks if email is sufficient
    const emailHandler = (input) => {
        setEmail(input);
        if (input.includes("@") && !input.includes(" ") && input.length > 2) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    };

    // Sets state of password and checks if password is sufficient
    const passwordHandler = (input) => {
        setPassword(input);
        if (input.length >= 8 && !input.includes(" ")) {
            setValidPassword(true);
        } else {
            setValidPassword(false);
        }
    };

    // Sets state of confirmation password and checks if password and confirm password match
    const confirmPasswordHandler = (input) => {
        setConfirmPassword(input);
        if (input === password) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
    };

    // Checks if all input fields are valid and then routes to home page
    const checkRegistration = async (event) => {
        event.preventDefault();
        if (validUsername && validEmail && validPassword && passwordsMatch) {
            // Axios request for registering a user
            const response = await axios.post("/user", {
                username: username,
                password: password,
                email: email,
            });

            if (response.data) {
                props.log(true);
                props.user(response.data);
                navigate("/");
            }
        }
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
                onChange={(elem) => emailHandler(elem.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(elem) => passwordHandler(elem.target.value)}
                placeholder="Password"
            />
            <input
                type="password"
                value={confirmPassword}
                onChange={(elem) => confirmPasswordHandler(elem.target.value)}
                placeholder="Confirm Password"
            />

            {/* Register information below */}
            <p className={validUsername ? "Valid" : "Invalid"}>
                Username must be at least 4 characters and less than 15
                characters long, no spaces
            </p>
            <p className={validEmail ? "Valid" : "Invalid"}>
                Email must be valid, no spaces
            </p>
            <p className={validPassword ? "Valid" : "Invalid"}>
                Password must be at least 8 characters long, no spaces
            </p>
            <p className={passwordsMatch ? "Valid" : "Invalid"}>
                Both the Password and the Confirmation Password must match
            </p>

            <input
                type="submit"
                className="LoginRegisterButton"
                value="Register"
            />
        </form>
    );
}
