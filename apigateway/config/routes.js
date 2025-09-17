// routes.js
// Map API endpoints → backend microservices

export default [
  {
    path: "/api/auth",
    target: "http://identity-service:4000", // Identity Service
  },
  {
    path: "/api/users",
    target: "http://user-service:5000", // User Service
  },
  {
    path: "/api/jobs",
    target: "http://job-service:4002", // Job Service
  },
  {
    path: "/api/applications",
    target: "http://application-service:4003", // Application Service
  },
  {
    path: "/api/messages",
    target: "http://messaging-service:4004", // Messaging Service
  },
];
