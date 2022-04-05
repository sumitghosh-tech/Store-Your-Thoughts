import axios from "axios";

const API=axios.create({baseURL:"BASE_URL"});  




export const fetchPosts=()=>API.get("/posts");    
export const fetchPost=(id)=>API.get(`/posts/${id}`); 

export const fetchPostsBySearch = (searchQuery) =>{
    //console.log("l",searchQuery);
    API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)};

export const createPost=(newPost)=>API.post("/posts",newPost);  

export const updatePost=(id,updatedPost)=>API.patch(`/posts/${id}`,updatedPost);  


export const deletePost=(id)=>API.delete(`/posts/${id}`);

export const likePost=(id)=>API.patch(`/posts/${id}/likePost`);


export const signIn=(formData)=>API.post("/user/signin",formData);

export const signUp=(formData)=>API.post("/user/signup",formData);

