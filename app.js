const express = require('express')

const app = express()

app.get('/',(req,res) =>{
    console.log("Base Url as been hit")
    res.send("Application base route")
})

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`)
})