import Post from "./Post/Post";
import { useSelector } from "react-redux";  //selecting data from global redux store
import useStyles from './styles';
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("profile"));
    const posts = useSelector((state) => {
        return state.posts;
    })
    //console.log("post",posts);    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {
                    posts.map((eachPost) => (
                        user && (user?.result?._id === eachPost.creator || user?.result?.googleId === eachPost.creator) ?
                            (<Grid key={eachPost._id} item  md={5} sm={6} xs={12}>
                                <Post post={eachPost} setCurrentId={setCurrentId} />
                            </Grid>) : null


                    ))

                }

            </Grid>
        )
    );
}

export default Posts; 