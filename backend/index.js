const express= require('express')
const connectDB= require('./config/db')
const dotenv=require('dotenv')
const app = express()
const cors= require('cors')
const notesRoute= require('./routes/notesRoutes')
const authRoutes=require('./routes/authRoutes')

app.use(express.json())
app.use(cors())
dotenv.config()
connectDB()
app.use("/auth",authRoutes)
app.use("/",notesRoute)

let port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running on the port:  ${port}`);
    
})