
import pool from "../config/db.js";


export const getEvent=(req,res)=>{

    try {
        pool.query("SELECT * FROM events",(err,result)=>{
            if(err) console.log(err);
            else{ res.status(200).json({data:result.rows});
            console.log('data send successfully');
            }
            
        })

        
    } catch (error) {
  console.log(error);
  res.status(400).json({msg:error});
          
    }
}