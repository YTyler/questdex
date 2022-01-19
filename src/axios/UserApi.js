import axios from "../../axiosConfig";

export async function login(username, password) {
    try {
        const response = await axios.post('/user', {
            username: username,
            password: password
        });
        return response.data;
    } catch (err) {
        return err;
    }
}

//! Username's should be unique, may need to change it to take tokens instead
export async function logout(username) {
    try {
        const response = await axios.post('/user', {
            username: username
        });
        return response.data;
    } catch (err) {
        return err;
    }
}

export async function register(username, password, email) {
    try {
        const response = await axios.post('/user', {
            username: username,
            password: password,
            email: email
        });
        return response.data;
    } catch (err) {
        return err;
    }
}