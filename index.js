const express = require('express');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser');
const {createTodo, updateTodo} = require("./types");
const {todo} = require("./db")
app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());

app.post('/todo', async function(req, res){
    const createPayload = req.body;
    console.log(req);
    const parsedBody = createTodo.safeParse(createPayload);
    if(!parsedBody.success){
        res.status(411).json({
            msg: "ypu sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: createPayload.completed
    })

    res.json({
        msg: "Todo created",
    })
});


app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({todos});
});


app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedBody = updateTodo.safeParse(updatePayload);
    if(!parsedBody.success){
        res.status(411).json({
            msg: "Wrong data"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        complated: true
    })

    res.json({
        msg: "todo marked as completed",
    })
});

app.listen(3000);