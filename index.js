const express = require ('express');
const router=require ('./router/router')
const mongo =require('./connect')
const dotenv=require('dotenv')


const app=express();

dotenv.config();
mongo.connect();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Let's! Book your Rooms");
})
app.use('/api',router)
app.listen(process.env.PORT,()=>{
    console.log(`server is listening on port: ${process.env.PORT}`);
})