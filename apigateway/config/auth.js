export default {
  forwardAuth: {
    enabled: true,
    endpoint: "http://auth-service:4000/api/verify-token",
    header: "Authorization",
  },
};
