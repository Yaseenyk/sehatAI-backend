const express = require('express');

const app = express();
const db=require('./config/mongoose');
const routes=require('./routes');
app.use(express.urlencoded());
app.use('/',routes);



app.listen('300',(err)=>{
    if(err){
        console.log("Error:", err);
        return;
    }
    console.log('server Started on port 300');
}) 