import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';



mongoose.connect(process.env.MONGO).then(()=>{
    console.log('mongoDb is conncted');
}).catch((err)=>{
    console.log('mongoDb is not connected', err.message)
})
const app = express();

app.use(express.json())


app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});
app.use('/api/user/', userRouter)
app.use('/api/auth/', authRouter)

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success: 'false',
        statusCode,
        message
    })
})
