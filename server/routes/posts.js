import express from "express";
import {getPost, getPosts,createPost ,updatePost,deletePost,likePost,getPostsBySearch} from "../controllers/posts.js";

const router=express.Router();

router.get("/",getPosts); 
router.get("/:id",getPost); 

router.get("/search",getPostsBySearch);
router.post("/",createPost);  
router.patch("/:id",updatePost);  
router.delete("/:id",deletePost);

export default router;
