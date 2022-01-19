import axios from "../../axiosConfig";

// Backend Takes Request Params
export async function login(username, password) {
    try {
        const response = await axios.post('/user', {}, { params: {
            username,
            password
        }});
        return response.data;
    } catch (err) {
        return err;
    }
}

//! Username's should be unique, may need to change it to take tokens instead
// Empty request body because it only takes path params
export async function logout(username) {
    try {
        const response = await axios.post(`/user/${username}`, {});
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