const express = require ('express')
const app = express()
const ejs = require('ejs')
const PORT = 3000


app.get("/", (req,res)=>{
    res.sendFile(`${__dirname+"/index.html"}`)
})

const students = [
    { name: "Samson", age: 24, school: 'lautech' ,img: "images/ai-feature_1920.png"},
    { name: "Daniel", age: 28, school: 'Oau', img: "images/card_1920.png" },
    { name: "John", age: 30, school: 'Ui', img: "images/icon-cs-women-d-7.png" },
    { name: "James", age: 29, school: 'Lasu', img: "images/icon-cs-women-d-7.png" },
    { name: "Jamsel", age: 42, school: 'Unilag', img: "images/icon-cs-women-d-7.png"},
    { name: "Joel", age: 18, school: 'UniBen', img: "images/icon-cs-women-d-7.png"},
    { name: "David", age: 25, school: 'Uniporth', img: "images/icon-cs-women-d-7.png"},
    { name: "Joab", age: 48, school: 'Unilorin', img: "images/icon-cs-women-d-7.png"},
    { name: "Nathaniel", age: 22, school: 'KwaraState', img: "images/icon-cs-women-d-7.png"},
]

app.get("/api",(req, res)=>{
   try{
    res.status(201).send({students})
   }
   catch(error){
    res.status(503).send(error)
    console.log(error);
    
   }
})







app.listen(PORT,(req,res)=>{
    console.log(`app is working ${PORT}`)
})