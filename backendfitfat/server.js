import express from 'express'
import publicRoutes from './routes/public.js'

const app = express()
app.use(express.json())

app.use('/',publicRoutes)

/*
3 rotas

Publicas
  Cadastro e login

Privadas
  listar users

*/

app.listen(3001, () => console.log('Server running on port 3001'))