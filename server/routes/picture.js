import express from "express";
import { create } from "../controllers/picture.js";
import upload from "../config/multerAWS.js";

const router = express.Router();

router.post("/", upload.single("file"), create);

export default router;
