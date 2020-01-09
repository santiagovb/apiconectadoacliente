const express= require("express")
const bodyParser = require('body-parser')
const app=express()
const port = 3006
const consultas=require("./queries")
const cors=require("cors")

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

//adicionando los metodos  

app.get('/users', consultas.getUsers)
app.get('/users/:id', consultas.getUserById)
app.post('/users', consultas.createUser)
