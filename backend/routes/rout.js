const express=require("express");
const {data}=require("../controlller/control.js");

const router =express.Router();


router.get("/",data);

module.exports=router;