import express from "express";

const app = express()
const PORT = 3000
app.listen(PORT)

app.get("/", (res,req)=>{
    req.send("Hi, There!")
})
app.get("/express", (res,req)=>{
    req.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")
})
app.get("/greeting", (res,req)=>{
    req.send("Hello,  John Doe  ")
})
app.get("/nodejs", (res,req)=>{
    req.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
})

