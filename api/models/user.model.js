import mongoose from 'mongoose';
//creating  a schema for the user
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,

    },
    email: {
     type: String,
        required: true,
        unique: true,

    },
    password:{
         type: String,
        required: true,
        

    },


},{timestamps: true}
);
//create a model for the User
const User = mongoose.model('User', userSchema);
export default User;