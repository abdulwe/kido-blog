import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import errorHandler from '../utils/error.js';
import jwt from "jsonwebtoken";



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
        password:hashPassword,
    });

    try{

await newUser.save();
    res.json('signup successful');

    }
    catch(error){
        next(error);
    }
    
}; 
export const signin = async(req, res, next)=>{
const {email, password} = req.body;
if(!username || !password || !email === "" || !password === ""){
    next(errorHandler(400, "All field are required"));

}
try {
    const validUser = await User.findOne({email});
    if(!validUser){
        next(errorHandler(404, "Wrong Credentials"))
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword){
      return  next(errorHandler(400, "Wrong Credentials"));
    }
    const token = jwt.sign( { id: validUser._id}, process.env.JWT_KEY
    );
     const {password: pass, ...rest} = validUser._doc;
        
    res.status(200).cookie("acesss_token", token, {
        httpOnly: true,
    }).json(rest)
    
    
    
    
} catch (error) {
next(error)
    
}

}

