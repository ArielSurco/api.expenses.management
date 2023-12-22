import type { NextFunction, Request, Response } from 'express'

import { ENV } from '../shared/environment'

import { ResponseError } from './ResponseError'

export const ErrorHandler = (
  err: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) {
    return next(err)
  }

  const errorStatus = err.statusCode ?? 500
  const errorMessage = err.message || 'Internal server error'
  const showStack = err.withStack || ENV.nodeEnv === 'development'

  res.status(errorStatus)
  res.send({
    status: errorStatus,
    message: errorMessage,
    stack: showStack ? err.stack : undefined,
  })
}
