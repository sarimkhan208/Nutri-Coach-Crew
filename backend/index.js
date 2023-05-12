const express = require("express")
const app = express()
const cors = require("cors")
const { connection } = require("./connections/connection")
app.use(cors())
app.use(express.json())

app.listen(8080, async ()=>{
    try{
        await connection
        console.log('Connected to MongoDB')
    }catch(err){
        console.log(err)
    }
    console.log("server is running")
})