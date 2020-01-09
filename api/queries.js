const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db_user',
  password: 'personal',
  port: 5432,
})

 //--------------------------------------------------
//Obtener todos los usuarios

const getUsers = (request, response) => {
    pool.query('SELECT * FROM usuario', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
     
    })
  }
  
 //--------------------------------------------------
 //obtener un solo usuario

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM usuario WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results)
      response.json(results.rows)     
    })
  }
  

//----------------------------------------------------------------------
//crear un nuevo
const createUser = (request, response) => {
    const { nombre, area } = request.body
  
    pool.query('INSERT INTO usuario (nombre, area) VALUES ($1, $2)', [nombre, area], (error, results) => {
      if (error) {
        throw error
      }
      console.log(response)
      response.send('Usuario creado')
    })
  }
  

//importar el modulo
  module.exports = {
    getUsers,
    getUserById,
    createUser,    
  }
