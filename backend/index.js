const express = require("express")
const app = express()
const cors = require("cors")
const { connection } = require("./connections/connection")
const { userRouter } = require("./routes/userRoutes")
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Nutri-Coach-Crew Backend");
})

app.use("/users",userRouter);

app.listen(8080, async ()=>{
    try{
        await connection
        console.log('Connected to MongoDB')
    }catch(err){
        console.log(err)
    }
    console.log("server is running")
})