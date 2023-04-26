import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import dotenv from 'dotenv';
import routese from "./routes/routes.js"; 

///server instance
 const app=express();

//conf env

dotenv.config({path:'./config/.env'});

const port = process.env.PORT;




////middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use("/api/v1",routese);



app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
    
})
