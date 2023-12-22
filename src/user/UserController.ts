import { ResponseError } from '../server/ResponseError'
import { Controller } from '../shared/Controller'
import { PathParams } from '../shared/PathParams'

export const getUser = Controller<PathParams<'id'>>((req, res) => {
  const { id } = req.params

  if (id === '1') {
    throw new ResponseError(400, 'User does not exist')
  }

  res.send(`User ${req.params.id}`)
})
