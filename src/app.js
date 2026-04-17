const express = require("express")
const noteModel=require("./models/note.model")


const app=express()
app.use(express.json())


/*
POST/notes => create a note
GET/notes => Get all notes
DELETE/notes/:id => Delete a note
PATCH/notes/:id => Update a note 

*/
app.post("/notes", async (req,res) =>{
    const data=req.body  /* { title,description } */
    await noteModel.create({
        title:data.title,
        description:data.description,
    })
    res.status(201).json({
        message:"Note Created"
    })
})

app.get("/notes",async(req,res)=>{
    const notes= await noteModel.find() // find() always returns an array[]
                                        //findOne returns single value and it particularly find one value
    res.status(200).json({
        message:"Notes Fetched Successfully",
        notes:notes
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const id =req.params.id

    await noteModel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"Notes Deleted Successfully"
        
    })
})

app.patch("/notes/:id", async (req,res) =>{
    const id =req.params.id
    const description =req.body.description
    await noteModel.findOneAndUpdate({_id:id},{description:description})
    
    res.status(200).json({
        message:"Note Updated Successfully"
    })
})


module.exports=app