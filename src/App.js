import React from 'react'
import "assets/style/reset.css";
import store from './store/index'
import { Provider } from 'react-redux'
import Layout from './pages/home/Layout'
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <Router>
    <div className="App">
      <Layout/>
    </div>
      </Router>
    </Provider>
  );
}

export default App;

