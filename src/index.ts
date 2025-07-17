import express from 'express'
import routes from './routes'
import dotenv from 'dotenv'
import { logRequest } from './middleware/logger'
import { logError } from './middleware/error'

dotenv.config()

const app = express()

app.use(express.json())
app.use(logRequest)
app.use(routes)
app.use(logError)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})