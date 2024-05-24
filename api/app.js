import cookieParser from 'cookie-parser'
import express from 'express'
import AuthRouter from './routes/auth.route.js'
import cors from 'cors'
const app = express()


app.use(express.json())
app.use(cookieParser())
//app.use(cors({origin: true, credentials: true}));
app.use(cors({origin:  process.env.CLIENT_URL, credentials: true}));


app.listen(3000, ()=> console.log('server running'))

app.use('/api', AuthRouter)