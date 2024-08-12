import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://greatstack:8853295057@cluster0.fyhbcz5.mongodb.net/food-del').then(()=>console.log("DB connected"));
}