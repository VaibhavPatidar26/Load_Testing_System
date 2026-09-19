import express from "express";

const app  = express();

app.use(express.json());

app.get("/test",function(req:any,res:any){
res.send({
    message:"server running",
    success:true
})
})

app.listen(3000,function(){
    console.log("server running on port 3000");
})
