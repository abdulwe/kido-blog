import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import errorHandler from '../utils/error.js';



export const signup = async(req, res, next) => {
    const {username, email, password} = req.body;
    //check if all fields are provided
     if(
        !username || 
        !email || 
        !password || 
        username === '' || 
        email === '' || 
        password === ''
    )
        {
        next(errorHandler(400, 'All field are required'));
        
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password:hashPassword
    });

    try{

await newUser.save();
    res.json('signup successful');

    }
    catch(error){
        next(error);
    }
    
} 