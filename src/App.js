import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from 'react-router-dom';
import logo from './bentleyretaillogo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div style={{flex: 1}}>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/store' component={Store} />
          <Route path='/store/products/:productId' component={ProductDetails} />
          <Route path='/register' component={Register} />
          
          {/* Private Routes */}
          <PrivateRoute exact path='/account' Component={Account} />
          <PrivateRoute exact path='/cart' Component={Cart} />
          <PrivateRoute exact path='/checkout' Component={Checkout} />
          <PrivateRoute exact path='/orders' Component={Orders} />
          <PrivateRoute exact path='/orders/:orderId' Component={OrderDetails} />
          <PrivateRoute exact path='/store/inventory' Component={Inventory} />
          <PrivateRoute exact path='/store/vendors'  Components={Vendor} />
          <Navigate from='*' to='/' />
        </Routes>
      </Router>

    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
