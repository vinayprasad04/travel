import axios from 'axios';

export const getEvents = async () => {
    try {
        return await axios.get(process.env.REACT_APP_URL + "api/v1/events")

    } catch (er) {
        console.log(er);

    }
}



export const loadUser = async (token) => {
    try {
        return await axios.post(process.env.REACT_APP_URL + "api/v1/loadUser", {}, {
            headers: {
                token: token
            }
        })
    }
    catch (error) {
        console.log(error);

    }
}