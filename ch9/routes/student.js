import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("All student");
});
router.get("/add", (req, res) => {
  res.send("Add student");
});
router.get("/delete", (req, res) => {
  res.send("delete student");
});

export default router;
