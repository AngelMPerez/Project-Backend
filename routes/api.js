const Express =require('express')
const app = Express()
const dal = require('../data/database')
const cors = require('cors')
app.use(Express.json())//so the app can understand the body of the request (It parses incoming requests with JSON payloads (carga util) and is based on body-parser)
app.use(cors()) //so the browser allow the sharing of resorces (Cross Origin Resorce Sharing)

//Restful -> representational state transfer (use http)

const port = process.env.PORT || 4000

app.listen(port,()=>console.log("Ready in Port 4000"))

app.get('/',async (req, res) => {
    res.send(await dal.read())
})

app.get('/:type',async (req, res) => {
    res.send(await dal.readFilter(req.params.type))
    console.log(req.params.type)
})

app.post('/',async function(req,res){
    await dal.create(req.body)
    console.log(req.body)
    res.send('success')
})

app.patch('/:_id',async function(req,res){
    res.send(await dal.update(req.body,req.params._id))
})

app.delete('/:_id',async function(req,res){
    let result = await dal.erase(req.params._id)
    console.log(result)
    res.send('removed : '+ req.params._id )
})
