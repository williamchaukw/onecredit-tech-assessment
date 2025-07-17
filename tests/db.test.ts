import db from '../src/db'
import { UserDB } from '../src/types'

describe('SQLite DB', () => {
  it('should insert a user into the DB', () => {
    const email = 'dbtest3@example.com'
    const password = 'secure'

    const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)')
    const info = stmt.run(email, password)

    expect(info.changes).toBe(1)
  })

  it('should retrieve user by email', () => {
    const email = 'dbtest3@example.com'
    const stmt = db.prepare('SELECT * FROM users WHERE email = ?')
    const user = stmt.get(email) as UserDB

    expect(user).toBeDefined()
    expect(user.email).toBe(email)
  })
})
