# 🛡️ TypeScript Express API Starter

A Node.js RESTful API built with TypeScript, Express, JWT authentication, and SQLite (via `better-sqlite3`). Includes logging, error handling, and Axios usage.

---

## 📦 Tech Stack

- **Node.js** with **Express.js**
- **TypeScript**
- **SQLite** (using `better-sqlite3`)
- **JWT** authentication
- **bcrypt** for password hashing
- **Axios** for external API requests
- **dotenv** for environment management
- **Jest** for testing (optional)

### Step to start the project
- npm init -y
- npm install express bcrypt jsonwebtoken axios dotenv better-sqlite3
- npm install --save-dev typescript ts-node-dev @types/node @types/express @types/bcrypt @types/jsonwebtoken @types/axios
- npx tsc --init
- npm run dev

Inside tsconfig.json, ensure
{
  "target": "ES2020",
  "module": "commonjs",
  "outDir": "./dist",
  "rootDir": "./src",
  "strict": true,
  "esModuleInterop": true
}

#### Project structure 
project-root/
├── src/
│ ├── index.ts # Entry point
│ ├── routes.ts # Routes definitions
│ ├── db.ts # SQLite database setup
│ ├── types.ts # TypeScript interfaces/types
│ └── middleware/
│ ├── auth.ts # JWT auth middleware
│ ├── logger.ts # Request logger
│ └── error.ts # Error handler
├── .env # Environment variables
├── .gitignore
├── tsconfig.json
├── package.json
└── README.md

