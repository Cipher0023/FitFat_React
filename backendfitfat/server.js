import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'


const app = express()
app.use(express.json())


//rotas publicas
app.use('/',publicRoutes)

//rotas privadas
app.use('/', auth ,privateRoutes)

app.listen(3001, () => console.log('Server running on port 3001'))