import express from "express";

const app = express.Router();

app.get("/all", (req, res) => {
  res.send("All User");
});
app.post("/create", (req, res) => {
  res.send("Create new User");
});
app.delete("/delete", (req, res) => {
  res.send("Delete User");
});

export default app;
