import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signup, signin } from "../../actions/auth.js";

import Icon from "./icon";
import { Input } from "./Input";

import useStyles from "./styles";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    //console.log(formData);
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, navigate));   //when dispatch then going in actions
    } else {
      dispatch(signin(formData, navigate));
    }
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  }
  const handleShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true)
  }
  const switchMode = () => {
    setFormData(initialState);
    isSignUp ? setIsSignUp(false) : setIsSignUp(true)
    setShowPassword(false);
  }
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    //console.log(res,result,token);
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");  //after authentication redirect to home
    } catch (error) {
      console.log(error);
    }
  }
  const googleFailure = (error) => {
    console.log("signin fails", error);
  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className= {classes.paper}  elevation={3}>
        <Avatar className={`${classes.avatar} ${classes.center}`}>
          <LockOutLinedIcon />
        </Avatar>
        <Typography className= {classes.center} component="h1"  variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form autoComplete="off" className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            {
              isSignUp ? (
                <>
                  <Input name="firstName" label="First Name" onChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" onChange={handleChange} half />
                  <Input name="email" label="Email Address" onChange={handleChange} type="email" />
                  <Input name="password" label="Password" onChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                  <Input name="confirmPassword" label="Confirm Password" onChange={handleChange} type="password" />
                </>
              ) :
                <>
                  <Input name="email" label="Email Address" onChange={handleChange} type="email" />
                  <Input name="password" label="Password" onChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                </>

            }
          </Grid>
          <Button type="submit" className={classes.signin} fullWidth variant="contained" color="primary" >{isSignUp ? "Sign Up" : "Sign In"}</Button>
          <GoogleLogin
            clientId="535947160998-10p4rvifc1qh3nd0ab926sljbsqbgur1.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                startIcon={<Icon />}
                variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="center">
            <Grid item>
            <Button onClick={switchMode}>
              {
                isSignUp ? "Already have an account ? Sign In" : "Don't have an account ? Sign Up"

              }
            </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

    </Container>

  )
}


export default Auth;

//startIcon={<Icon />} 