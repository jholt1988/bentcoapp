import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Counter } from './features/counter/Counter';
import Login from './features/login/Login';
import Home from './features/home/Home';
import Store from './features/store/Store';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link  to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Sign-In</Link>
              </li>
              <li>
                <Link to='/store'>Shop</Link>
              </li>
            </ul>
          </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
        </header>

        <hr />
        
        <Routes>
          <Route path='/login' element={<Login />}/>
            
          <Route path='/store' element={<Store />}/>
            
          <Route path='/' element={<Home />}/>
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
