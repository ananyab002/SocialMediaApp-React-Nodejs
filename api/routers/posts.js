import express from "express";
import { addPost, deletePost, getPosts } from "../controllers/post.js";

const router = express.Router();

router.get("/getPosts", getPosts);
router.post("/addPost", addPost);
router.delete("/deletePost", deletePost);

export default router;
