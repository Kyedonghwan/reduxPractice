import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {createStore} from "redux";

import { Provider } from 'react-redux';
import reducers from "./reducers";
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={createStore(reducers)} >
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>);