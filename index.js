const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
const course_Data = require('./Data/data.json')

app.get("/", (req, res)=>{
    res.send("Server side is running")
});
app.get("/courses", (req, res)=>{
     res.send(course_Data)
})
app.get("/courses/:id" , (req,res)=>{
    console.log(req.params.id)
    const id = req.params.id;
    const single_Course =course_Data.find(course => course.id == id)
    res.send(single_Course)
    
})
app.listen(port , ()=>{
    console.log(`server is running port: ${port}`);
})