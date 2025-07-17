import request from 'supertest'
import express from 'express'
import router from '../src/routes'

const app = express()
app.use(express.json())
app.use(router)

describe('Auth routes', () => {
  it('should register a user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'jest2@example.com', password: '123456' })

    expect(res.status).toBe(200)
    expect(res.body.message).toBe('User registered successfully')
  })

  it('should fail to register duplicate user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'jest2@example.com', password: '123456' })

    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Email already exists')
  })
})
