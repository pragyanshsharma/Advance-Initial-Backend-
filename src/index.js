import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import connectDB from "./db/index.js";

connectDB();











/*
import express from "express";
const app = express();
(async ()=>{
    try{
        await mongoose.connect('${process.env.MONGO_URL}/${Db_name}');
        app/on("error", (error)=>{
            console.log("Error in DB connection");
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Process is running on port ${process.env.PORT}`);
        })

    } catch(error){
        console.log("Error in DB connection", error);
        throw error;
    }
})()

*/


