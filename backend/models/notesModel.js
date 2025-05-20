const mongoose = require('mongoose')
const notesSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})
module.exports= new mongoose.model("notes",notesSchema)