import { Router, Request, Response } from 'express'
import { UserRequest, UserDB } from './types'
import db from './db'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { authenticateToken, AuthRequest } from './middleware/auth'
import axios from 'axios'

const router = Router()

// register endpoint 
router.post('/api/auth/register', async (req: Request, res: Response) => {
    const { email, password } = req.body as UserRequest

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' })
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)')
        stmt.run(email, hashedPassword)
        res.status(200).json({ message: 'User registered successfully' })
    } catch(err: any) {
        if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return res.status(400).json({ message: 'Email already exists' })
        }
        console.log(err)
        return res.status(500).json({ message: 'Internal server error' })
    }
})

// login endpoint
router.post('/api/auth/login', async (req: Request, res: Response) => {
    const { email, password } = req.body as UserRequest

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' })
    }

    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as UserDB
    if (!user) {
        return res.status(400).json({message: "Invalid credential"})
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        return res.status(400).json({message: "Incorrect password"})
    }

    const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET as string, {
        expiresIn: '1h'
    })

    res.status(200).json({token})

})

router.post('/api/auth/profile', authenticateToken, (req: AuthRequest, res:Response) => {
    const {id} = req.user!
    const user = db.prepare('select * from users where id = ?').get(id) as UserDB
    
    if(!user) {
        return res.status(404).json({message: "User not found"})
    }
    
    res.status(200).json({user})
})

router.post('/api/users/random', async (req: Request, res:Response) => {
    const resp = await axios.get('https://randomuser.me/api/')
    const user = resp.data.results[0]
    
    console.log(user)
    res.status(200).json({user})
})

export default router
