const mongoose=require('mongoose')
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`successfully connected to MONGO db server `)
    }
    catch(err){
        console.log("Error while connecting to the db");
        
    }
}
module.exports=connectDB