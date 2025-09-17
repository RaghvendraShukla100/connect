# Connect – API Gateway

The **API Gateway** is the single entry point for all client requests in the **Connect** platform.  
It handles routing, authentication, validation, rate limiting, CORS, and request forwarding to microservices.

---

## 📂 Project Structure

/gateway
│── /config
│ │── routes.js # Routes → services mapping
│ │── plugins.js # Plugins (rate-limit, logging, etc.)
│ │── cors.js # CORS rules
│ │── rate-limit.js # Rate limiting configs
│ │── auth.js # Forward auth config / JWT verify
│
│── /src
│ │── index.js # Express app bootstrap (entry point)
│ │── server.js # Server listen (split from index.js for tests)
│ │
│ │── /routes
│ │ │── auth-routes.js # Auth-specific routes
│ │ │── job-routes.js # Job posting routes
│ │ │── profile-routes.js # User profile routes
│ │ │── messaging-routes.js
│ │
│ │── /middleware
│ │ │── validate-request.js # Request validation (Joi/Zod)
│ │ │── error-handler.js # Central error handler
│ │ │── security.js # Helmet, CORS setup
│ │ │── auth-middleware.js # JWT / API key validation
│ │
│ │── /validations
│ │ │── auth.schema.js
│ │ │── job.schema.js
│ │ │── profile.schema.js
│
│── Dockerfile
│── package.json
│── README.md

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
