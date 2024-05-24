import cookieParser from 'cookie-parser'
import express from 'express'
import AuthRouter from './routes/auth.route.js'
const app = express()


app.use(express.json())
app.use(cookieParser())
// app.use()
app.listen(3000, ()=> console.log('server running'))

app.use('/api', AuthRouter)