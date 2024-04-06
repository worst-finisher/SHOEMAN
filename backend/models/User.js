import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    location: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
});


const UserModel = new mongoose.model('UserInfo',UserSchema );

export default UserModel;