import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('mongoDb is conncted');
}).catch((err)=>{
    console.log('mongoDb is not connected', err.message)
})
const app = express();




app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});