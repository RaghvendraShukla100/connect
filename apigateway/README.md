# Connect – API Gateway

The **API Gateway** is the single entry point for all client requests in the **Connect** platform.  
It handles routing, authentication, validation, rate limiting, CORS, and request forwarding to microservices.

---

## 📂 Project Structure

/gateway
│
├── /config
│ ├── routes.js # Routes → service mapping (user → user-service URL)
│ ├── plugins.js # Plugins (rate-limit, logging, compression, etc.)
│ ├── cors.js # Centralized CORS rules
│ ├── rate-limit.js # Rate limiting configs
│ ├── auth.js # JWT verify / forward auth config
│ ├── env.js # Centralized env loader (dotenv + validation)
│ └── logger.js # Winston/Pino logger config
│
├── /src
│ ├── app.js # Express app bootstrap
│ ├── server.js # Server listen (split for testability)
│ │
│ ├── /routes
│ │ ├── auth-routes.js # Auth routes → identity-service
│ │ ├── job-routes.js # Job posting routes
│ │ ├── profile-routes.js # User profile routes
│ │ ├── messaging-routes.js # Chat routes
│ │ ├── notification-routes.js # Notification routes
│ │ ├── payment-routes.js # Payment service routes (future-proof)
│ │ └── index.js # Collect & mount all route modules
│ │
│ ├── /middleware
│ │ ├── validate-request.js # Request validation (Joi/Zod)
│ │ ├── error-handler.js # Central error handler
│ │ ├── security.js # Helmet, CORS setup, sanitization
│ │ ├── auth-middleware.js # JWT / API key validation
│ │ └── logging.js # Request logging middleware
│ │
│ ├── /validations
│ │ ├── auth.schema.js # Auth request schema
│ │ ├── job.schema.js # Job request schema
│ │ ├── profile.schema.js # Profile update schema
│ │ └── messaging.schema.js # Messaging schema (optional future)
│ │
│ └── /utils
│ ├── proxy.js # http-proxy-middleware setup
│ ├── response.js # Standardized API responses
│ └── constants.js # Reusable constants (roles, error codes)
│
├── /tests
│ ├── integration/ # E2E tests (supertest + jest/mocha)
│ ├── unit/ # Unit tests (routes, middleware)
│ └── contract/ # Contract tests (OpenAPI validation)
│
├── Dockerfile # Docker build config
├── package.json
├── .env # Local environment variables
├── .gitignore
└── README.md # Gateway overview + setup guide

---

## 🚀 Features

- **Centralized Routing** → Forwards requests to Auth, Job, Profile, and Messaging services.
- **Request Validation** → Using Joi schemas.
- **Security** → Helmet, CORS setup.
- **Rate Limiting** → Protects against abuse.
- **Error Handling** → Consistent error response structure.
- **Extensible** → Add more routes/services easily.

---

## 🛠️ Setup & Installation

### 1. Clone Repository

```bash
git clone  https://github.com/RaghvendraShukla100/connect.git
cd connect/gateway

2. Install Dependencies
npm install

3. Start Gateway
npm start

🐳 Docker
Build Image
docker build -t connect-gateway .

Run Container
docker run -p 3000:3000 connect-gateway

⚙️ Environment Variables

Create a .env file inside /gateway:

PORT=3000
AUTH_SERVICE_URL=http://auth-service:4000
JOB_SERVICE_URL=http://job-service:4001
PROFILE_SERVICE_URL=http://profile-service:4002
MESSAGING_SERVICE_URL=http://messaging-service:4003
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100

📡 Example Routes

POST /auth/register → Forwards to Auth Service
POST /auth/login → Forwards to Auth Service
GET /jobs → Forwards to Job Service
GET /profile/:id → Forwards to Profile Service
POST /messages/send → Forwards to Messaging Service

```
