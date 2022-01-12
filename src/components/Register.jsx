import React, {useState} from "react";

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const checkRegistration = (event) => {
        event.preventDefault();
        console.log("Register Attempt")
        register();
    }

    const register = () => {
        console.log("Registration Successful")
    }

    return (
        <form onSubmit={checkRegistration} className="LoginRegister">
            <input type = "text" value = {username} onChange={(elem) => setUsername(elem.target.value)} placeholder="Username"/>
            <input type = "email" value = {email} onChange={(elem) => setEmail(elem.target.value)} placeholder="Email"/>
            <input type = "password" value = {password} onChange={(elem) => setPassword(elem.target.value)} placeholder="Password"/>
            <input type = "password" value={confirmPassword} onChange={(elem) => setConfirmPassword(elem.target.value)} placeholder="Confirm Password"/>
            <input type = "submit" className="LoginRegisterButton" value="Register" />
        </form>
    );
}