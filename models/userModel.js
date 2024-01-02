import mongoose from "mongoose";
import { DEP_STATUS } from "../utils/constant.js";

const UserSchema = new mongoose.Schema({
    name:String,
    Secondname:String,
    department:{
        type:String,
        enum:DEP_STATUS,
        default:DEP_STATUS.CSE
    },
    registerNo: {
        type: Number,
        required: true, 
    },
    email:String,
    password:String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
   
})

UserSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
};

export default mongoose.model("User", UserSchema);