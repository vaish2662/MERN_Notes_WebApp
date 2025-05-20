import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function GetNotes() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note,setNote]= useState({})


    function getNotesbyId(){
        fetch(`http://localhost:5000/${id}`).then((res1)=>{
            res1.json().then((res2)=>{
                // console.log(res2);
                setNote(res2)
            })
        })
    }
    useEffect(()=>{
        getNotesbyId()
    },[])
    
    function deleteNote(idd){
        fetch(`http://localhost:5000/delete/${idd}`,{
            method:"delete",
        }).then((res1)=>{
            res1.json().then((res2)=>{
                console.log(res2);
                navigate('/')
                
            })
        }) 
    }
    
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <button
        onClick={() => navigate("/")}
        className="mb-4 text-blue-400 hover:underline text-sm"
      >
        ⬅ Back to All Notes
      </button>
      <div className="flex justify-between items-center mb-2">
  <h1 className="text-3xl font-bold">{note.title}</h1>
  <button className="text-red-400 hover:underline text-sm cursor-pointer" onClick={()=>deleteNote(note._id)}>Delete</button>
</div>
      <p className="text-sm text-gray-400 mb-6">
        Last updated: {new Date(note.updatedAt).toLocaleString()}
      </p>

      <div className="bg-gray-800 p-6 rounded-xl shadow text-gray-200 leading-relaxed">
        {note.body}
      </div>
    </div>
  )
}

export default GetNotes
