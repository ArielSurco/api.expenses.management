import { Router } from 'express'

import { RouterHandler } from '../server/routes'

import { getUser } from './UserController'

const router = Router()

router.get('/:id', getUser)

export const userRouter: RouterHandler = {
  basePath: '/user',
  router,
}
