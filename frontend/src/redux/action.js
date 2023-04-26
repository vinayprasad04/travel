import axios from "axios";

export const getData = async ()=>{
    try {

        return await axios.get("http://localhost:7000/api/v1/"+"/data" )
    } catch (error) {
        console.log(error)
    }
};