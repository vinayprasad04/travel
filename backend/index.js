const express =require("express");
const set=require("./routes/rout");

 const app=express();


 app.use(express.json());
 app.use("/api/v1",set);


 app.listen(7000,()=>{
    console.log(" server run succesfully");
 });
 