

import * as api from '../api';


export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);  //data=[result and tokden] which is given by server\controllers\user.js ->signin function
    //console.log("sd",data);
    dispatch({ type: "AUTH", data });  //saving data in localstorage by reducers

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);  //data=[result and token] which is given by server\controllers\user.js ->signup function

    dispatch({ type: "AUTH", data });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};