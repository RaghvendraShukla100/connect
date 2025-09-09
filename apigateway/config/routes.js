export default [
  {
    path: "/api/auth",
    target: "http://auth-service:4000",
    stripPrefix: "/api/auth",
  },
  {
    path: "/api/jobs",
    target: "http://job-service:5000",
    stripPrefix: "/api/jobs",
  },
  {
    path: "/api/profile",
    target: "http://profile-service:4100",
    stripPrefix: "/api/profile",
  },
  {
    path: "/api/messages",
    target: "http://message-service:4200",
    stripPrefix: "/api/messages",
  },
];
