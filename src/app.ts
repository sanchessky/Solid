import express from "express"
import  cors  from "cors";

const app = express()
app.use(express.json())
app.use(cors())
app.get("/api/v1/listar", (req,res)=>{
    res.status(200).send({msg:"Rota listar"})
})
app.listen(5000,()=>{
    console.log(`Online em: http://127.0.0.1:5000`)
})