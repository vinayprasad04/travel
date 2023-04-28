const pool=require("../config/db")


const getAllEvents=async (req, res)=>{
    try{
        let result= await pool.query("SELECT * FROM events");
        res.status(200).json(result.rows);
        result =result.rows;
        console.log(result)
    }catch(err){
        console.log(err);
    }  
}

const getEventbyId= async (req, res)=>{
    try{
        const id=req.params.id;
        const result=await pool.query("select * from events where id=$1",[id]);

        res.json(result.rows);
    }catch(err){
        console.log(err);
    }
}

const addEvent= async (req, res)=>{
    const {title, category, venue, start_date, end_date, seats_available, price_child, price_adult, is_topevent, status, attended, event_description, event_rating}=req.body;
    const q="insert into events (title, category, venue, start_date, end_date, seats_available, price_child, price_adult, is_topevent, status, attended, event_description, event_rating) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)";
    try{
        const result=await pool.query(q,[title, category, venue, start_date, end_date, seats_available, price_child, price_adult, is_topevent, status, attended, event_description, event_rating]);
        res.send(result);
    }catch(err){
        console.error(err);
    }

}

const deleteEvent=async (req, res)=>{
    const id=req.params.id;
    const q="delete from ratings where id=$1";

    try{
        const result= await pool.query(q,[id]);
        res.send(result);
    }catch(err){
        console.log(err);
    }

}

const changeEvent=async (req, res)=>{
    const {id, user_name, rated_on , rating_value, comment, events_id}=req.body;
    const q="update ratings set id=$1, user_name=$2, rated_on=$3 , rating_value=$4, comment=$5, events_id=$6 where id=$1";

    try{
        const result=await pool.query(q,[id, user_name, rated_on , rating_value, comment, events_id]);
        res.send(result);
    }catch(err){
        console.log(err);
    }


}

module.exports={
    getAllEvents,
    getEventbyId,
    addEvent,
    deleteEvent,
    changeEvent
}