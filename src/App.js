import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Modal from './components/Modal';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
