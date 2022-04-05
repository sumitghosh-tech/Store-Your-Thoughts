import React, { useEffect } from 'react'
import { Container, Paper, Typography, CircularProgress, Divider, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import useStyles from "./styles"
import { getPost } from "../../actions/posts";

export const PostDetails = () => {
  const { post, posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPost(id))
  }, [dispatch, id]);
  if (!post) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress />
      </Paper>
    )
  }
  return (
    <Paper maxWidth="lg" style={{ padding: '10px 10px', borderRadius: '15px' }} elevation={6}>
    <Container style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
        <Grid item md={8} sm={12} xs={12}>
          <Typography variant="h3" component="h2">{post.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
        </Grid>

        <Grid className={classes.center} item md={4} sm={12} xs={12} >
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </Grid>
      </Grid>
    </Container>
    </Paper>
  )
}


// eslint-disable-next-line no-lone-blocks
{/* <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
    <div className={classes.card}>

      <div className={classes.section}>
        <Typography variant="h3" component="h2">{post.title}</Typography>
        <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
        <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
        {/* <Typography variant="h6">Created by: {post.name}</Typography> */}
// eslint-disable-next-line no-lone-blocks
{/* <Divider style={{ margin: '20px 0' }} /> */ }
// eslint-disable-next-line no-lone-blocks
{/* <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
        <Divider style={{ margin: '20px 0' }} />
        <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography> */}
// eslint-disable-next-line no-lone-blocks
{/* <Divider style={{ margin: '20px 0' }} /> */ }
  //     </div>
  //     <div className={classes.imageSection}>
  //       <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
  //     </div>
  //   </div>


  // </Paper> */}