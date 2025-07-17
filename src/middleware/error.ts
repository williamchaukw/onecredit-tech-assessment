import { Request, Response, NextFunction } from 'express'

export function logError(
    err:any,
    req:Request, 
    resp:Response,
    next:NextFunction
){
    const status = err.status || 500
    const message = err.message || 'Internal server error'

    resp.status(status).json({message})
}