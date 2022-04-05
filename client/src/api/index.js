import axios from "axios";

const API=axios.create({baseURL:"https://keep-your-own.herokuapp.com"});  //this url connects backend and frontend


/*API.interceptors.request.use(req=>{
    try {
        if(localStorage.getItem("profile")){
            req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
            return req;
        }
    } catch (error) {
        return Promise.reject(error);
    }});    */  //it helps auth middleware
    //this function is executed before all these API get post patch , we have to send token to backend so that backend middleware can verify this


//baseURL: for heroku : https://keep-your-own.herokuapp.com http://localhost:5000

export const fetchPosts=()=>API.get("/posts");    //GET:  http://localhost:5000/posts  -->go to server>routes>posts.js

export const fetchPost=(id)=>API.get(`/posts/${id}`); 

export const fetchPostsBySearch = (searchQuery) =>{
    //console.log("l",searchQuery);
    API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)};

export const createPost=(newPost)=>API.post("/posts",newPost);  //POST:http://localhost:5000/posts-->go to server>routes>posts.js


export const updatePost=(id,updatedPost)=>API.patch(`/posts/${id}`,updatedPost);  


export const deletePost=(id)=>API.delete(`/posts/${id}`);

export const likePost=(id)=>API.patch(`/posts/${id}/likePost`);


export const signIn=(formData)=>API.post("/user/signin",formData);

export const signUp=(formData)=>API.post("/user/signup",formData);



//PATCH :http://localhost:5000/posts/id-->go to server>routes>posts.js