import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import Form from "../Form/Form"
import Posts from '../Posts/Posts';
import Pagination from '../Pagination';
import ChipInput from "material-ui-chip-input";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}



const Home = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);


  const searchPost = () => {
    //console.log(search.trim(),tags);
    if (search.trim() || tags) {
      //console.log(search);
      dispatch(getPostsBySearch({ search:search, tags: tags.join(',') }));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAdd = (tag) => {
    setTags([...tags, tag]);
   // console.log(tags);
  };

   const handleDelete = (tagToDelete) => {
      setTags(tags.filter((tag) => tag !== tagToDelete));
     // console.log(tags);

    }

  useEffect(() => {
    dispatch(getPosts());  //when home page will be shown, then getPosts() will be dispatched automatically by useEffect.
  }, [currentId, dispatch]); //currentId,dispatch change hole useEffect execute hobe
  return (
    <Grow in>
      <Container maxWidth="lg">
        <Grid className={`${classes.mainContainer} ${classes.gridContainer}`} container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item md={8} sm={12} xs={12}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>

          <Grid className={classes.center} item md={4} sm={12} xs={12} >
            
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}
export default Home;
