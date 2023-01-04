const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('public'))

const path = require('path')
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'public','deployEcommerce.html'))
})


app.listen(PORT,()=>{
    console.log("web is running on " , + PORT)
})