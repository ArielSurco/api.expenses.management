import express, { Application } from 'express'
import cors from 'cors'

import { ENV } from '../shared/environment'

import { routes } from './routes'
import { ErrorHandler } from './ErrorHandler'

export class Server {
  private app: Application

  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
    this.errorHandler()
  }

  private middlewares() {
    this.app.use(express.json())
    this.app.use(cors())
  }

  private routes() {
    routes.forEach(({ basePath, router }) => {
      this.app.use(basePath, router)
    })

    this.app.get('*', (req, res) => {
      res.status(404).send('Not found')
    })
  }

  private errorHandler() {
    this.app.use(ErrorHandler)
  }

  public init() {
    this.app.listen(ENV.port, () => {
      console.log('Server listening on port 3000')
    })
  }
}
