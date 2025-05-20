import { Routes,Route } from 'react-router-dom'
import './App.css'
import AllNotes from './component/AllNotes'
import CreateNotes from './component/CreateNotes'
import GetNotes from './component/GetNotes'
import Navbar from './component/Navbar'
import EditNotes from './component/EditNotes'
import SignUp from './component/SignUp'
import SignIn from './component/SignIn'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<AllNotes/>}/>
      <Route path="/create" element={<CreateNotes/>}/>
      <Route path="/:id" element={<GetNotes/>}/>
      <Route path="/edit/:id" element={<EditNotes/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    </>
  )
}

export default App
