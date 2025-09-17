import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ service: "identity", message: "Hello from Identity Service!" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Identity service running on port ${PORT}`);
});
