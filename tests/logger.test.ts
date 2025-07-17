import { logRequest } from '../src/middleware/logger'
import { Request, Response, NextFunction } from 'express'

describe('logRequest middleware', () => {
  it('should call next()', () => {
    const req = { method: 'GET', originalUrl: '/test' } as Request
    const res = {} as Response
    const next = jest.fn() as NextFunction

    logRequest(req, res, next)

    expect(next).toHaveBeenCalled()
  })
})
