import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export interface AuthRequest extends Request {
    user?: {id:number, email: string}
}

export function authenticateToken(req: AuthRequest, res:Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1]

    if(!token){
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user as {id:number , email:string}
        next()
    })
}