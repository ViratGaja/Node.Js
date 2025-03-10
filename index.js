import express from 'express'
const app=express()
const PORT=3000

//Define a simple route

app.get('/',(req,res)=>{
    res.send("Hi  ahh")
})


//Dynamic Url Routing

app.get('/user/:user_name',(req,res)=>{
    const user_name=req.params.user_name;
    res.send(`Hi da ${user_name} login ahh `)
})



app.listen(PORT,()=>{
    console.log(`server is runnning ${PORT} `);
    
})