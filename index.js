import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import router from './src/routes/userRoutes.js'

const app = express()
const PORT = process.env.PORT ?? 5000
app.use(express.json())
app.use(cors())

app.use('./api', router)
app.listen(PORT, console.log(`server: http://localhost:${PORT}`))
