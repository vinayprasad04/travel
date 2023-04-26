const express = require("express");
const app = express();
const PORT = 5000;


app.post('/api/login',(req,res)=>{
    console.log(req.body)
    res.json({'message':"Form Submitted"})
})

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
