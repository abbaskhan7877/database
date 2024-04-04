import mongoose from "mongoose";
import  {DBNAME} from "../constant.js";




const dbconnect=async()=>{
    try{
        await mongoose.connect(`${process.env.DBURL}/${DBNAME}`)
        console.log("db connection ok")
    }catch(err){
        console.log("error-------",err)
    }
}
export default dbconnect