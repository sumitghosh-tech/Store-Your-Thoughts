import express from 'express';
import mongoose from 'mongoose';

import PostMessage from "../models/postMessage.js";

export const getPosts=async(req,res)=>{    

    try {
        const postMessages= await PostMessage.find().sort({_id:-1});
        
        res.status(200).json(postMessages);  
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const getPost=async(req,res)=>{    
    const {id}=req.params;

    try {
        const post= await PostMessage.findById(id);
        
        res.status(200).json(post);  
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const d = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});
        res.status(202).json({d:d});  

        } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}
export const createPost = async (req, res) => {  

    const post = req.body;
    const newPostMessage = new PostMessage({...post ,createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



export const updatePost = async (req, res) => {  

    const { id } = req.params;    
    const post=req.body;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).send("No post with tchat id");
    } 
    else
    {
        const updatedPost=await PostMessage.findByIdAndUpdate(id,{...post},{new:true});
        res.json(updatedPost);                                         

    }
    
}

export const deletePost= async (req,res) =>{
    const { id } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).send("No post with thvat id");
    } 
    else
    {
        await PostMessage.findByIdAndDelete(id);
        res.json({message:"Post deleted successfully"});

    }
}

