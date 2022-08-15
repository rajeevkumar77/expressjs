// const express = require('express')
import express from "express";
const router = express.Router();
import { homeController } from "../controllers/homeController.js";
import { imageController } from "../controllers/imageController.js";

router.get("/", homeController);
router.get("/image", imageController);

export default router;
