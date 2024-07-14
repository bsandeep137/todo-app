const express = require('express');
const app = express();
const {createTodo, updateTodo} = require("./types");

app.use(express.json());



app.get('/todos', function(){
    const createPayload = req.body;
    const parsedBody = createTodo.safeParse(createPayload);
    if(!parsedBody.success){
        res.status(411).json({
            msg: "ypu sent the wrong inputs"
        })
        return;
    }
});


app.post("/todo", function(req,res){});


app.put("/completed", function(req,res){
    const updatePayload = req.body;
    const parsedBody = updateTodo.safeParse(updatePayload);
    if(!parsedBody.success){
        res.status(411).json({
            msg: "Wrong data"
        })
        return;
    }
});