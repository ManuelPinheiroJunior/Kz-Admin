import express from "express";
import { create, findAll, remove } from "../controllers/picture.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/", upload.single("file"), create);
router.get("/all", findAll);
router.delete("/:id", remove);

export default router;
