import express from "express";
const router = express.Router();
import {
  allStudent,
  deleteStudent,
  addStudent,
} from "../controllers/studentController.js";

router.get("/all", allStudent);

router.get("/delete/:id([0-9]{2})", deleteStudent);

router.get("/add", addStudent);

export default router;
