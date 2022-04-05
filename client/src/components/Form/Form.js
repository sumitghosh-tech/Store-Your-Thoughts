import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost,updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({  title: '', message: '', tags: '', selectedFile: '' });
  const selectedPost=useSelector((state)=>currentId ? state.posts.find(post=>post._id===currentId) : null);
  const dispatch=useDispatch();

  const classes = useStyles();

  const user=JSON.parse(localStorage.getItem("profile"));
  //console.log(user?.result?._id);
  // console.log("full state",useSelector((state)=>{
  //   return state;
  // }));
  useEffect(()=>{
    if(selectedPost) setPostData(selectedPost);
  },[selectedPost]);

  const clear = (e) => {
    setCurrentId(null);
    setPostData({  title: '', message: '', tags: '', selectedFile: '' });

    };

  const handleSubmit = async (e) => {
      e.preventDefault();
      if(currentId!==null){
        dispatch(updatePost(currentId,{...postData,name:user?.result?.name,creator:user?.result?._id ||user?.result?.googleId}));
        clear();
      }
      else{
        dispatch(createPost({...postData,name:user?.result?.name,creator:user?.result?._id ||user?.result?.googleId}));    //when form is submitted then createPost(postData) dispatch is done.
        clear();
      }

    };
    if (!user?.result?.name){
      return(
        <Paper className={classes.paper}>
          <Typography variant='h6' align='center'>Please SignIn to create memories.</Typography>
        </Paper>
      )
    }

  return (
    <Paper className={`${classes.paper} ${classes.center}`} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing ` : 'Creating a Memory'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;