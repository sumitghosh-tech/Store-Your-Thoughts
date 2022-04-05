import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import decode from "jwt-decode";
import NotesIcon from "@material-ui/icons/Notes";
import useStyles from './styles';
//import memories from "../../images/memories.png";
const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "LOGOUT_DO" });
    navigate("/");
    setUser(null);
  }
  //console.log(",",user);
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));

  }, [location]);
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">

      <div className={classes.brandContainer}>
        <NotesIcon className={classes.icon}/>
        <Link className={classes.underline} to="/"><Typography className={classes.heading} variant="h4" align="center">Keeper</Typography></Link>
        {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
      </div>

      <Toolbar className={classes.toolbar}>
        <div className={classes.profile}>
          {user ? (
            <>
              <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
            </>
          ) : (
            <Link to="/auth"><Button variant="contained" color="primary" style={{textDecoration:'none'}}>Sign In</Button></Link>

          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;