import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

  
function AllNotes() {
    const [notes,setNotes]=useState([])
    const navigate = useNavigate();
    function getNotes(){
        fetch("http://localhost:5000/allrecords").then((res1)=>{
            res1.json().then((res2)=>{
                setNotes(res2)
            })
        })
    }

    useEffect(()=>{
        getNotes()
    },[])

    function deleteNote(id){
        fetch(`http://localhost:5000/delete/${id}`,{
            method:"delete",
        }).then((res1)=>{
            res1.json().then((res2)=>{
                console.log(res2);
                getNotes()
                
            })
        }) 
    }
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white p-6">
      <h3 className="text-2xl font-bold mb-6">All Notes</h3>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {notes.map((note) => (
          <div
            key={note.title}
            className="bg-gray-800 rounded-2xl p-4 shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
            <p className="text-gray-300 text-sm line-clamp-3 mb-4">
              {note.body}
            </p>
            {/* <p className="text-gray-500 text-xs mb-2">
              Last updated: {new Date(note.updatedAt).toLocaleDateString()}
            </p> */}
            <div className="flex space-x-3">
              <button className="text-blue-400 hover:underline text-sm cursor-pointer"onClick={() => navigate(`/${note._id}`)}>View</button>
              <button className="text-yellow-400 hover:underline text-sm cursor-pointer" onClick={() => navigate(`/edit/${note._id}`)}>Edit</button>
              <button className="text-red-400 hover:underline text-sm cursor-pointer" onClick={()=>deleteNote(note._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default AllNotes
