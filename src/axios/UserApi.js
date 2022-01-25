import axios from "./axiosConfig";

// Backend Takes Request Params
export async function login(username, password) {
    try {
        const response = await axios.post('/user/login', {}, { params: {
            username,
            password
        }});
        // console.log(response);
        // console.log(response.headers);        
        const condition = Object.keys(response.data).length === 0;
        console.log(condition)
        if(condition) {return Promise.resolve(null) }
        else {
            return Promise.resolve(response.data);
        }
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
        console.log(response);
        return Promise.resolve(response.data);
    } catch (err) {
        return err;
    }
}

export async function deleteUser(username) {
    try {
        await axios.delete(`/user/${username}`);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}