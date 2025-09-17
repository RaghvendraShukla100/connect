import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ service: "user", message: "Hello from USER SERVICE!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`user service running on port ${PORT}`);
});
