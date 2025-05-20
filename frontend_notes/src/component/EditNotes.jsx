import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditNotes() {
    const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


   function getNotesbyId(){
          fetch(`http://localhost:5000/${id}`).then((res1)=>{
              res1.json().then((res2)=>{
                  setTitle(res2.title)
                  setBody(res2.body)
              })
          })
      }
      useEffect(()=>{
          getNotesbyId()
      },[])

     function handleSubmit(e){
        e.preventDefault()
        let data= {title,body}
        fetch(`http://localhost:5000/update/${id}`,{
            method:"put",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }).then((res1)=>{
            res1.json().then((res2)=>{
                navigate("/")
                
            })
        })

     }
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white p-6">
      <button
        onClick={() => navigate("/")}
        className="mb-4 text-blue-400 hover:underline text-sm"
      >
        ⬅ Back to All Notes
      </button>
      <h1 className="text-2xl font-bold mb-6">Edit Note</h1>

      <form onSubmit={handleSubmit}className="space-y-6 max-w-xl">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Update title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            className="w-full px-4 py-2 h-40 bg-gray-800 border border-gray-700 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Update note content..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Update Note
        </button>
      </form>
    </div>
    </div>
  )
}

export default EditNotes
