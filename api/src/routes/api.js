import express from 'express'
import authRoutes from './auth'

const apiRouter = express.Router()

apiRouter.use('/auth', authRoutes)

apiRouter.get('/', (req, res) => {
  res.send('Acturer API')
})

export default apiRouter
