const authReducer = (state = null, action) => {
    switch (action.type) {
      case "AUTH":
        localStorage.setItem('profile', JSON.stringify(action?.data));//saving to localstorage for staying logged in
        //localstorage e profile name er akta item create kore setate action?.data store kora holo

        return state=action?.data;
      case "LOGOUT":
        localStorage.clear();
  
        return state=null;
      default:
        return state;
    }
  };
  
  export default authReducer;

//JSON.stringify -> storing

//JSON.parse -> saving




/*
const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
      case "AUTH":
        localStorage.setItem('profile', JSON.stringify({ ...action?.data }));//saving to localstorage for staying logged in
        //localstorage e profile name er akta item create kore setate action?.data store kora holo
        return { ...state, authData: action?.data, loading: false, errors: null };
      case "LOGOUT":
        localStorage.clear();
  
        return { ...state, authData: null, loading: false, errors: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
*/