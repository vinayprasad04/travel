import axios from 'axios';

export const getEvents=async ()=>{
    try{
        return await axios.get(process.env.REACT_APP_URL+"api/v1/events")

    }catch(er){
        console.log(er);
        
    }
}