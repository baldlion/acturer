import express from 'express'
import apiRoutes from './routes/api'

const app = express()
const port = 4444

app.use('/api', apiRoutes)

app.listen(port, () => {
  console.log(`API server listening on port ${port}.`)
})
