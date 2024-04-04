import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path:"./.env"})
import dbconnect from "./database/dbconnection.js";


dbconnect();

// ;
// (async ()=>{
//       try{
//          await mongoose.connect(`${process.env.DBURL}/${process.env.DBNAME}`)
//           console.log("db connected")
//        }catch(err){
//        console.log("error------",err)
//      }
// })()