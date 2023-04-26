const data=async (req,res)=>{
    try {

        res.status(200).json({message:"server okay"});
        
    } catch (error) {
        res.status(400).json({message:error});
        
    }
};
module.exports={data};