require('dotenv').config()

const express = require('express')
// import express from "express"
const app = express()
// made a varidable
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/nonsense' , (req , res) =>{
    res.send("hehehehhe")
})

app.get('/twiter' , (req , res)=>{
    res.send("Ansh")
})



// request made

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

// actions are implemented when we restart the server