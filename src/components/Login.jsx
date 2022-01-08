import React from "react";

export default function Login() {
    return (
        <div>
            <form>
                <label for = "username">Username</label>
                <input type = "text" id = "username" placeholder = "Username..."/>

                <label for = "password">Password</label>
                <input type = "password" id = "password" placeholder = "Password..."/>

                <input type = "submit" value = "Submit"/>
            </form>
        </div>
    );
}