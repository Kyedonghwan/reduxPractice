import React from 'react';
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Detail from './routes/Detail';
import Home from './routes/Home';
import {createStore} from "redux";
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

function App() {
  return <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact element={Home}></Route>
          <Route path="/:id" element={Detail}></Route>
        </Routes>
      </Router>
  </Provider>
}

export default App;