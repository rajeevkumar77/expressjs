import { Router } from "express";
// import express from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("All teacher");
});
router.get("/add", (req, res) => {
  res.send("Add teacher");
});
router.get("/delete", (req, res) => {
  res.send("delete teacher");
});

export default router;
