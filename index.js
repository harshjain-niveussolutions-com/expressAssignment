const express = require('express');
const dotEnv = require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
console.log(process.env.PORT)
const port =process.env.PORT || 8000;
app.use(bodyParser.json());
//here we can use api path as '/api/:user' 
app.get('/:category',(req,res)=>{
    const jsonData = {qParams:req.params, pParams:req.path};
    // console.log(jsonData)
    res.status(200).json(jsonData)
});


//check with postman
app.post('/cateData',(req,res)=>{
    let cateArr = [];
    cateArr.push(req.body);
    res.status(200).json(cateArr);
})

app.listen(port,()=>{
    console.log(`listening to port ${port}` )
})