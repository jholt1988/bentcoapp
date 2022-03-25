import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './features/Login/Login';
import Store from './features/Store/Store';
import ProductDetails from './features/ProductDetails/ProductDetails';
import Register from './features/Register/Register';
import Vendors from './features/Vendors/Vendors';
import Products from './features/Products/Products';
import Orders from './features/Order/Order';
import Inventory from './features/Inventory/Inventory';
import Checkout from './features/Checkout/Checkout'
import Home from './features/Home/Home';
import Account from './features/Account/Account';
import Cart from './features/Cart/Cart';
import PrivateRoute from './components/PrivateRoute';
import OrderDetails from './features/OrderDetails/OrderDetails';
import  primaryTheme  from './theme';
import { ThemeProvider } from '@mui/material/styles';


import { Counter } from './features/counter/Counter';
import './App.css';


function App() {
  return (
    <div style={{ flex: 1 }}>
      <ThemeProvider theme={primaryTheme}>
      <Router>
        <Header className='header' />
          <Routes>
  
          {/* Public Routes */}
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} element={<Login />} />
          <Route path='/store' component={Store} />
          <Route path='/store/products/:productId' component={ProductDetails} />
          <Route path='/register' component={Register} />
          
          {/* Private Routes */}
          <Route exact path='/account' Component={<PrivateRoute/>} >
            <Route exact path='/account' Component={Account} />
           </Route>
            <Route exact path='/cart' Component={<PrivateRoute />} >
              <Route exact path='/cart' Component={Cart} />
            </Route>  
            <Route exact path='/checkout' Component={<PrivateRoute />} >
              <Route exact path='/checkout' Component={Checkout} />
            </Route>  
            <Route exact path='/orders' Component={<PrivateRoute />} >
              <Route exact path='/orders' Component={Orders} />
            </Route>  
            <Route exact path='/orders/:orderId' Component={<PrivateRoute />} >
              <Route exact path='/orders/:orderId' Component={OrderDetails} />
            </Route>  
            <Route exact path='/store/inventory' Component={<PrivateRoute />} >
              <Route exact path='/store/inventory' Component={Inventory} />
            </Route> 
            <Route exact path='/store/vendors' Components={<PrivateRoute />} >
              <Route exact path='/store/vendors' Components={Vendors} />
            </Route>  
          <Route from='*' to='/' />
        </Routes>
      </Router>
        </ThemeProvider>
         </div>        
   
    //       
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span> */}
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
