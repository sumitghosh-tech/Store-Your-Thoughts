import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";


import "./index.css";

import App from "./App";
const myStore =createStore(reducers,compose(applyMiddleware(thunk)));    //redux store which can be accessed throuchout the App

ReactDOM.render(
    <Provider store={myStore}>
        <App/>
    </Provider>,
    document.getElementById('root'));