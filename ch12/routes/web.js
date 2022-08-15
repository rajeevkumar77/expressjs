// const express = require('express')
import express from "express";
const router = express.Router();
import { homeController } from "../controllers/homeController.js";
import { contactController } from "../controllers/contactController.js";
import { aboutController } from "../controllers/aboutController.js";

router.get("/", homeController);
router.get("/about", aboutController);
router.get("/contact", contactController);

export default router;
