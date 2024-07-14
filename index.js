const express = require('express');
const app = express();

app.use(express.json());



app.get('/todos', function(){});


app.post("/todo", function(req,res){});


app.put("/completed", function(req,res){});