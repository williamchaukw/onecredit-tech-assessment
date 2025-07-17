Step to start the project
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

Project structure 
project-root/
├── src/
│   ├── index.ts             # entry point
│   ├── db.ts                # better-sqlite3 connection
│   ├── routes.ts            # all routes (e.g. auth, user)
│   ├── types.ts             # UserRequest, UserDB types
│   └── middleware/
│       ├── auth.ts          # JWT middleware
│       ├── logger.ts        # logRequest
│       └── error.ts         # logError
├── .env                     # JWT_SECRET and config
├── tsconfig.json
└── package.json

