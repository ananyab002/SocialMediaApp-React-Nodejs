import { addPosts, getPosts } from "../controllers/post.js";
import express from "express";

const router = express.Router();

router.get("/", getPosts);
router.post("/", addPosts);

export default router;
