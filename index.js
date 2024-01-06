var express=require('express')
const path = require('path')
const app=express()
app.listen(5000,()=>{
    console.log('Server running on port 5000')
})

app.use(express.static(path.join(__dirname, 'react-yb', 'build')))
app.get('/',(req,res)=>{
    res.send('<h1>Hi peeks!</h1>')
})

app.get('/api',(req,res)=>{
    res.json({message:"Hi this is api cmo"})
})
app.get('/api/users',(req,res)=>{
    res.json({
        users:[
            {
                name:'yash bansal'
            }
        ]
    })
})