

import * as api from '../api/index.js';


//  getPosts, createPost are actions creator.
//  api.fetchPosts(), api.createPost(post) are backend.
export const getPosts = () => async (dispatch) => {
  try {
    //dispatch({type:"START_LOADING"});
    const { data } = await api.fetchPosts();  //data=all posts
    //dispatch({type:"STOP_LOADING"});
    dispatch({ type: "FETCH_ALL", payload: data }); //go to reducers>posts.js and get matched with type:"FETCH_ALL"
  } catch (error) {                                   // dispatch is like return.
    console.log(error);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);  //data=all posts
    dispatch({ type: "FETCH_POST", payload: data }); //go to reducers>posts.js and get matched with type:"FETCH_ALL"
  } catch (error) {                                   // dispatch is like return.
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    //dispatch({type:"START_LOADING"});
    const {d:{d}} =  await api.fetchPostsBySearch(searchQuery);
    dispatch({type:'FETCH_BY_SEARCH',payload:d});
    //dispatch({type:"STOP_LOADING"});
  } catch (error) {
      console.log(error);
  }
  };

export const createPost = (post) => async (dispatch) => {
    try {
      //dispatch({type:"START_LOADING"});
      const { data } = await api.createPost(post);  //data=new post
  
      dispatch({ type: "CREATE", payload: data }); //go to reducers>posts.js and get matched with type:"CREATE"

    } catch (error) {
      console.log(error);
    }
  };

  
export const updatePost = (id,post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id,post);

    dispatch({ type: "UPDATE", payload: data }); //go to reducers>posts.js and get matched with type:"UPDATE"
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: "DELETE",payload:id }); //go to reducers>posts.js and get matched with type:"UPDATE"
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: "LIKE",payload:data }); //go to reducers>posts.js and get matched with type:"UPDATE"
  } catch (error) {
    console.log(error);
  }
};