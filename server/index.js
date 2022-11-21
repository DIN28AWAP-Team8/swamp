const express = require ('express')
const app = express ()
const port =3001


app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).json({message:"Node Server is responding"})
})

app.listen(port)