import cors from "cors";

const security = (app, corsConfig) => {
  if (corsConfig) {
    const corsOptions = {
      origin: (origin, cb) => {
        if (!origin) return cb(null, true);
        if (corsConfig.origin.includes(origin)) return cb(null, true);
        return cb(new Error("Not allowed by CORS"));
      },
      methods: corsConfig.methods,
      allowedHeaders: corsConfig.allowedHeaders,
      credentials: corsConfig.credentials,
    };
    app.use(cors(corsOptions));
  } else {
    app.use(cors());
  }
};

export default security;
