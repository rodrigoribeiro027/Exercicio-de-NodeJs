
const bodyParser = require('body-parser')
const express = require("express");
const app = express()
const port = 3000;

app.set('view engine','ejs')
app.set('views','./views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req, res) => {
    res.render( "index")
})


app.post('/enviar', (req,res)=>{
    console.log(req.body)
    res.render('pessoa',{email:req.body.email,telefone:req.body.telefone})
})





app.listen(port,()=>{console.log(`Servidor rodando na porta ${port}`)})