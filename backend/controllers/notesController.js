const Notes= require("../models/notesModel")

// get all notes
const notes_index= async(req,res)=>{
    await Notes.find().sort()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
        
    })
}

// get notesbyId
const notes_details=async(req,res)=>{
    const id= req.params.id;
    await Notes.findById(id)
    .then(result=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);  
    })  
}

// create notes
const notes_create=async(req,res)=>{
     let data = new Notes(req.body)
     await data.save()
     .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
}

// update notes
const notes_update=async(req,res)=>{
    my_req={"_id":req.params.id}
     await Notes.updateOne(my_req,{
            $set:req.body
        })
        .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
    
}

// delete notes
const notes_delete=async(req,res)=>{
    await Notes.deleteOne({"_id":req.params.id})
     .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
}


module.exports={
    notes_index,
    notes_details,
    notes_create,
    notes_update,
    notes_delete
}