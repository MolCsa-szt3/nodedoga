import express from "express";

const app = express()
const PORT = 3000
app.listen(PORT)

app.get("/", (res,req)=>{
    req.send("Hi, There!")
})

