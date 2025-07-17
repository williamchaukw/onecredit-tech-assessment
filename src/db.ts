import Database from 'better-sqlite3'

const db = new Database('users.db')

db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
`).run()

// db.prepare('INSERT INTO users (email, password) VALUES (?, ?)').run('william@gmail.com', '123456')

export default db