import express from 'express'
import AuthRouter from './routes/auth.route.js'

const app = express()

app.use(express.json())
app.listen(3000, ()=> console.log('server running'))

app.use('/api', AuthRouter)