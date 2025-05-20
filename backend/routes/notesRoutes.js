const express=require('express')
const router= express.Router()
const {notes_index,notes_details,notes_create,notes_update,notes_delete}=require("../controllers/notesController")

router.get("/allrecords",notes_index)

router.get("/:id",notes_details)

router.post("/create",notes_create)

router.put("/update/:id",notes_update)

router.delete("/delete/:id",notes_delete)

module.exports=router